import { EventBus } from "./EventBus";
import { ViewModel } from "./ViewModel";
import { container } from "tsyringe";

export function configureStore<S>(viewModels: {
  [key: string]: new (...args: any[]) => ViewModel<any>;
}) {
  Object.values(viewModels);

  const diContainer = container.createChildContainer();
  const storeEventBus = new EventBus();
  const updateKey = "store-update";

  const viewModelInstances = Object.fromEntries(
    Object.entries(viewModels).map(([key, vm]) => {
      const instance = diContainer.resolve(vm);
      instance.subscribe(() => {
        storeEventBus.emit(updateKey);
      });
      return [key, instance];
    })
  );

  const state = new Proxy(
    {},
    {
      get(_, prop, receiver) {
        const viewModelState = viewModelInstances[prop as string]?.getState();
        return viewModelState;
      },
    }
  ) as S;

  const subscribe = (listener: () => void) => {
    storeEventBus.on(updateKey, listener);
  };

  const unSubscribe = (listener: () => void) => {
    storeEventBus.off(updateKey, listener);
  };

  return {
    subscribe,
    unSubscribe,
    diContainer,
    state,
    viewModels: viewModelInstances,
  };
}

export type StoreType = ReturnType<typeof configureStore>;

export * from "./react/connect";
export * from "./react/provider";
export * from "./decorator";
export * from './ViewModel';
