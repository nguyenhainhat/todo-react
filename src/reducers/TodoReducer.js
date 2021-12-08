import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS,
  SAVE_TODOS,
  ENTER_VALUE,
  STATE_EDIT,
  ENTER_EDIT,
  STATE_COMPLETE,
} from "./types";

export const initState = {
  todos: [],
  list: "",
  stateEdit: false,
  enterValue: "",
  editValues: "",
  isComplete: false,
};

export const todoReducer = (state, action) => {
  const {type, payload} = action;
  let {todos, list, stateEdit, enterValue, editValues, isComplete} = state;

  switch (type) {
    case GET_TODOS:
      console.log("getting todos");
      const getTodos = localStorage.getItem("todolist1");
      if (getTodos) todos = JSON.parse(getTodos);
      return {...state, todos};
    case SAVE_TODOS:
      console.log("saving todos");
      localStorage.setItem("todolist1", JSON.stringify(payload.todos));
      return {...state, todos};
    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, payload.todo],
      };
    case DELETE_TODO:
      let filterTodos = todos.filter((todo) => todo.id !== payload.id);
      return {...state, todos: filterTodos};
    case EDIT_TODO:
      let findIndex = todos.findIndex((todo) => todo.id === payload.id);
      todos.splice(findIndex, 1, payload);
      return {...state, todos};
    case ENTER_VALUE:
      return {...state, enterValue: payload};
    case STATE_EDIT:
      return {...state, stateEdit: !stateEdit};
    case ENTER_EDIT:
      return {...state, editValues: payload};
    case STATE_COMPLETE:
      return {...state, isComplete: !isComplete};
    default:
      return state;
  }
};
