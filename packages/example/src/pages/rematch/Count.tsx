import * as React from "react";
import Questions from "./questions";
import Sharks from "./sharks";
import Dolphins from "./dolphins";

type Props = {};

const Count: React.FunctionComponent<Props> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Dolphins />
      <Sharks />
      <Questions />
      <p>Using Rematch Models</p>
    </div>
  );
};

export default React.memo(Count);
