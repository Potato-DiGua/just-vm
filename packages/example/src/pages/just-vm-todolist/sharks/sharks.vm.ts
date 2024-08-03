import { delay } from "@src/utils";
import { Service, ViewModel } from "just-vm";
import { Dolphins } from "../dolphins/dolphins.vm";
import { inject, delay as proxy, registry } from "tsyringe";

export type SharksState = number;
const state: number = 0;

@Service()
export class Sharks extends ViewModel<typeof state> {
  constructor(
    @inject(proxy(() => Dolphins)) private readonly dolphins: Readonly<Dolphins>
  ) {
    super();
  }

  initState(): number {
    return state;
  }

  increment = (payload: number) => {
    console.log("sharks increment");
    this.setState(this.getState() + payload);
  };

  incrementAsync = async (payload: number) => {
    await delay(500);

    this.increment(payload);
    this.dolphins.increment(-payload);
    console.log("incrementAsync end");
  };
}
