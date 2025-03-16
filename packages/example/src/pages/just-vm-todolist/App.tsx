import "./App.css";
import CreateToDo from "./create-todo";
import ToDoList from "./todo-list";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <CreateToDo />
      <ToDoList />
    </div>
  );
}

export default App;
