import * as React from "react";
import { connect } from "react-redux";
import { RootState, Dispatch } from "../store";
import { Button, ButtonGroup, Card } from "@mui/material";

const mapState = (state: RootState) => ({
  dolphins: state.dolphins,
  sharks: state.sharks,
});

const mapDispatch = (dispatch: Dispatch) => ({
  incrementSharks: () => dispatch.sharks.increment(1),
  incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
  incrementSharksAsync2: () =>
    dispatch({ type: "sharks/incrementAsync", payload: 2 }),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const Count: React.FunctionComponent<Props> = (props) => {
  return (
    <Card variant="outlined" sx={{ margin: 5, padding: 5 }}>
      <h3>Sharks</h3>
      <h1>{props.sharks}</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" onClick={props.incrementSharks}>
          +1
        </Button>
        <Button variant="contained" onClick={props.incrementSharksAsync}>
          Async +1
        </Button>
        <Button variant="contained" onClick={props.incrementSharksAsync2}>
          Async +2
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default connect(mapState, mapDispatch)(React.memo(Count));
