import { Dolphins } from "./dolphins/dolphins.vm";
import { Sharks } from "./sharks/sharks.vm";
import { Question } from "./questions/questions.vm";

export const storeViewModels = {
  dolphins: Dolphins,
  sharks: Sharks,
  questions: Question,
} as const;

type GetPrototype<T extends Record<string, new (...args: any[]) => any>> = {
  [P in keyof T]: InstanceType<T[P]>;
};

export type Dispatch = GetPrototype<typeof storeViewModels>;
export type RootState = {
  [P in keyof Dispatch]: ReturnType<Dispatch[P]["getState"]>;
};
