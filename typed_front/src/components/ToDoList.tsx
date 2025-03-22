import React from "react";
import { Todo } from "../model";
import "../css/styles.css";
import SingleToDo from "./SingleToDo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <SingleToDo todo={t} key={t.id} todos = {todos} setTodos={setTodos}></SingleToDo>
      ))}
    </div>
  );
};

export default ToDoList;
