import React, {useContext} from "react";
import TodoContext from "../contexts/CreateContext";
import {AuthContext} from "../contexts/AuthContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {useStore} from "../Store";

const Todos = () => {
  // Load context
  const [state] = useStore();

  const {todos} = state;
  // Load auth context
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{textAlign: "center"}}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
