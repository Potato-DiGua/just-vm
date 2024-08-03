import produce from "immer";
import { Service, ViewModel } from "just-vm";

type QuestionType = "boolean" | "multiple" | "mixed";
interface QuestionsState {
  questions: number[];
  amount: number;
  type: QuestionType;
}
const state = {
  questions: [],
  amount: 0,
  type: "boolean",
} as QuestionsState;

@Service()
export class Question extends ViewModel<typeof state> {
  override initState() {
    return state;
  }

  setQuestions(payload: Array<number>) {
    this.setState(
      produce(this.getState(), (draft) => {
        draft.questions = draft.questions.concat(payload);
        draft.amount = draft.questions.length;
      })
    );
  }

  loadQuestions = async (categoryId: string) => {
    this.setQuestions([1, 2]);
  };

  otherLoadQuestion = async () => {
    this.loadQuestions("1");
  };
}
