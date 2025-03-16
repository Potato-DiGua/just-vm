import produce from "immer";
import { Service, ViewModel } from "just-vm";
import { ToDoItem, ToDoStatus } from "../model";

const state = {
  toDoList: [] as ToDoItem[]
};

@Service()
export class PageViewModel extends ViewModel<typeof state> {
  override initState() {
    return {...state};
  }

  addToDo(toDo: ToDoItem) {
    console.log('addToDo')
    this.setState(
      produce(this.getState(), (draft) => {
        draft.toDoList.push({
          ...toDo,
        })
      })
    );
  }

  changeToDoStatus(id: string, status: ToDoStatus) {
    this.setState(
      produce(this.getState(), (draft)=>{
        const toDo = draft.toDoList.find(v=>v.id === id);
        if (toDo) {
          toDo.status = status;
        } else {
          // TODO: show tip
          console.error(new Error('can not find this todo'))
        }
      })
    )
  }

  removeToDo(id: string) {
    this.setState(
      produce(this.getState(), (draft)=>{
        draft.toDoList = draft.toDoList.filter(v=>v.id === id)
      })
    )
  }

  updateToDo(toDo: ToDoItem) {
    this.setState(
      produce(this.getState(), (draft)=>{
        const index = draft.toDoList.findIndex(v=>v.id === toDo.id);
        if (index >= 0) {
          draft.toDoList[index] = toDo;
        }
      })
    )
  }
  
}
