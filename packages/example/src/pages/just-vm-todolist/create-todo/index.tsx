import * as React from "react";
import { connect } from "just-vm";
import { RootState, Dispatch } from "../models";
import { Button, ButtonGroup, Card, Input } from "@mui/material";
import { ToDoStatus } from "../model";

const mapState = (state: RootState) => ({
  
});

const mapDispatch = (dispatch: Dispatch) => ({
  createToDo: dispatch.page.addToDo.bind(dispatch.page)
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const Count: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
    <Input type="text" />
    <Button onClick={()=>{
      props.createToDo({
        id: Date.now().toString(),
        title: 'test',
        content: '1111',
        status: ToDoStatus.WAIT,
      })
    }}>提交</Button>
    </div>

  );
};

export default connect(mapState, mapDispatch)(React.memo(Count));
