import { delay } from "@src/utils";
import { Sharks } from "../sharks/sharks.vm";
import { Service, ViewModel } from "just-vm";
import { inject, delay as proxy } from "tsyringe";

export type DolphinsState = number;

const state: number = 10;

@Service()
export class Dolphins extends ViewModel<typeof state> {
  constructor(@inject(proxy(() => Sharks)) private shark: Readonly<Sharks>) {
    super();
  }

  override initState() {
    console.log("Dolphins initState");
    return state;
  }

  increment = (num: number) => {
    this.setState(this.getState() + num);
    console.log("dol shark inc");
    this.shark.increment(1);
  };

  incrementAsync = async (): Promise<void> => {
    await delay(500);
    this.increment(1);
  };
}
