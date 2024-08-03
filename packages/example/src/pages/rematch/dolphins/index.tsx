import * as React from "react";
import { connect } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Button, ButtonGroup, Card } from "@mui/material";

const mapState = (state: RootState) => {
  return {
    dolphins: state.dolphins,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  incrementDolphins: () => dispatch.dolphins.increment(1),
  incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
});

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const Count: React.FunctionComponent<Props> = (props) => {
  return (
    <Card variant="outlined" sx={{ margin: 5, padding: 5 }}>
      <h3>Dolphins</h3>
      <h1>{props.dolphins}</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" onClick={props.incrementDolphins}>
          +1
        </Button>
        <Button variant="contained" onClick={props.incrementDolphinsAsync}>
          Async +1
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default connect(mapState, mapDispatch)(React.memo(Count));
