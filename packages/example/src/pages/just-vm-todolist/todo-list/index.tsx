import * as React from "react";
import { connect } from "just-vm";
import { RootState, Dispatch } from "../models";
import { Card } from "@mui/material";

const mapState = (state: RootState) => {
  return {
    toDoList: state.page.toDoList,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
});

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

const ToDoList: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.toDoList.map(toDo=>{
        return (<Card variant="outlined" sx={{ margin: 5, padding: 5 }}>
          <h3>{toDo.title}</h3>
          <h1>{toDo.status}</h1>
          <p>{toDo.content}</p>
        </Card>)
      })}
    </div>
  );
};

export default connect(mapState, mapDispatch)(React.memo(ToDoList));
