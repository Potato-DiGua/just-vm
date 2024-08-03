import { injectable, Lifecycle, scoped } from "tsyringe";
import { type constructor } from "tsyringe/dist/typings/types";

export function Service<T = any>() {
  return (target: constructor<T>) => {
    scoped(Lifecycle.ContainerScoped)(target);
    injectable()(target);
  };
}
