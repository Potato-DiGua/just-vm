export interface ToDoItem {
  id: string;
  title: string;
  content: string;
  status: ToDoStatus;
}

export enum ToDoStatus {
  WAIT,
  DOING,
  DONE,
}
