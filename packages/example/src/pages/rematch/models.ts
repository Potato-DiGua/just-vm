import { Models } from "@rematch/core";
import { dolphins } from "./dolphins/dolphins";
import { sharks } from "./sharks/sharks";
import { questions } from "./questions/questions";

export interface RootModel extends Models<RootModel> {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
  questions: typeof questions;
}

export const models: RootModel = { dolphins, sharks, questions };
