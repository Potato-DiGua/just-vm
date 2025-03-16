import { Dolphins } from "./todo-list/ToDoList.vm";
import { PageViewModel } from "./page/page.vm";

export const storeViewModels = {
  dolphins: Dolphins,
  page: PageViewModel,
} as const;

type GetPrototype<T extends Record<string, new (...args: any[]) => any>> = {
  [P in keyof T]: InstanceType<T[P]>;
};

export type Dispatch = GetPrototype<typeof storeViewModels>;
export type RootState = {
  [P in keyof Dispatch]: ReturnType<Dispatch[P]["getState"]>;
};
