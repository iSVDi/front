import { useState } from "react";
import InputField from "./components/InputField";
import "./css/App.css";
import { Todo } from "./model";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
    </div>
  );
};

export default App;
