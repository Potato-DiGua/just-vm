import React, { ComponentType, PureComponent } from "react";
import { MVVMContext } from "./provider";
import { StoreType } from "..";

export function connect(
  mapState: (state: any) => Record<string, any>,
  mapDispatch: (dispatch: any) => Record<string, Function>
) {
  return (component: ComponentType<any>) => {
    return class Connect extends PureComponent {
      dispatchProps: Record<string, Function> | null = null;

      store: StoreType | null = null;

      render() {
        return (
          <MVVMContext.Consumer>
            {(v) => this.renderChildren(v as StoreType)}
          </MVVMContext.Consumer>
        );
      }

      renderChildren(store: StoreType) {
        this.state = store;
        const Component = component;
        store.subscribe(this.listener);
        this.dispatchProps ??= mapDispatch(store?.viewModels || {});
        return (
          <Component
            {...mapState(store?.state || {})}
            {...this.dispatchProps}
            {...this.props}
          />
        );
      }

      listener = () => {
        this.forceUpdate();
      };

      componentWillUnmount(): void {
        this.store?.unSubscribe(this.listener);
        this.store = null;
      }
    };
  };
}
