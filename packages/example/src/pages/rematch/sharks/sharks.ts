import { createModel } from "@rematch/core";
import { delay } from "@src/utils";
import type { RootModel } from "../models";

export type SharksState = number;

export const sharks = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment: (state, payload: number) => {
      console.log("sharks increment");
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number): Promise<void> {
      await delay(500);
      
      dispatch.sharks.increment(payload);
      console.log('incrementAsync end')
    },
  }),
});
