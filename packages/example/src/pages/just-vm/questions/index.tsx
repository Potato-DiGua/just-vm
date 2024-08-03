import * as React from "react";
import { connect } from "just-vm";
import { RootState, Dispatch } from "../models";
import { Button, ButtonGroup, Card } from "@mui/material";

const mapState = (state: RootState) => ({
  questions: state.questions.amount,
});

const mapDispatch = (dispatch: Dispatch) => ({
  load: dispatch.questions.otherLoadQuestion,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const Count: React.FunctionComponent<Props> = (props) => {
  return (
    <Card variant="outlined" sx={{ margin: 5, padding: 5 }}>
      <h3>Questions</h3>
      <h1>{props.questions}</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" onClick={props.load}>
          Load
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default connect(mapState, mapDispatch)(React.memo(Count));
