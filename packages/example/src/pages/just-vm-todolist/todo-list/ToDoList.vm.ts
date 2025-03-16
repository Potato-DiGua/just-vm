import { delay } from "@src/utils";
import { Service, ViewModel } from "just-vm";

export type DolphinsState = number;

const state: number = 10;

@Service()
export class Dolphins extends ViewModel<typeof state> {

  override initState() {
    console.log("Dolphins initState");
    return state;
  }

  increment = (num: number) => {
    this.setState(this.getState() + num);
    console.log("dol shark inc");
  };

  incrementAsync = async (): Promise<void> => {
    await delay(500);
    this.increment(1);
  };
}
