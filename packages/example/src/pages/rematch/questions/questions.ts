import { createModel } from "@rematch/core";
import produce from "immer";
import type { RootModel } from "../models";

type QuestionType = "boolean" | "multiple" | "mixed";
interface QuestionsState {
  questions: number[];
  amount: number;
  type: QuestionType;
}

export const questions = createModel<RootModel>()({
  state: {
    questions: [],
    amount: 0,
    type: "boolean",
  } as QuestionsState,
  reducers: {
    setQuestions: (state, payload: Array<number>) =>
      produce(state, (draft) => {
        draft.questions = draft.questions.concat(payload);
        draft.amount = draft.questions.length;
      }),
  },
  effects: (dispatch) => ({
    async loadQuestions({ categoryId }: { categoryId: string }, rootState) {
      dispatch.questions.setQuestions([1, 2]);
    },
    async otherLoadQuestion() {
      dispatch.questions.loadQuestions({ categoryId: "1" });
    },
  }),
});
