import { EventBus } from "./EventBus";

export type Listener = () => void;

export class ViewModel<S = {}> {
  private state: S;
  private eventBus = new EventBus();

  constructor() {
    this.state = this.initState();
  }

  initState(): S {
    return {} as S;
  }

  setState = (state: S) => {
    if (state !== this.state) {
      this.state = state;
      this.eventBus.emit("update");
    }
  };

  getState = () => {
    return this.state;
  };

  subscribe = (listener: Listener) => {
    this.eventBus.on("update", listener);
  };

  unSubscribe = (listener: Listener) => {
    this.eventBus.off("update", listener);
  };
}
