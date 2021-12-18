import React, {useContext} from "react";
import TodoContext from "../contexts/CreateContext";
import {AuthContext} from "../contexts/AuthContext";
import {ThemeContext} from "../contexts/ThemeContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {useStore} from "../Store";

const Todos = () => {
  // Load context
  const [state] = useStore();

  const {todos} = state;
  // Load auth context
  const {isAuthenticated} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;
  const style = isLightTheme ? light : dark;

  return (
    <div className="todo-list" style={style}>
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <p style={{textAlign: "center", paddingBottom: '20px'}}>Not authorised</p>
      )}
    </div>
  );
};

export default Todos;
