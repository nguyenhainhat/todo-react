import React, {useContext, useState, useEffect} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {DELETE_TODO, EDIT_TODO, STATE_EDIT, ENTER_EDIT, STATE_COMPLETE} from "../reducers/types";
import {useStore} from "../Store";
import {v4 as uuidv4} from "uuid";
import "../sass/todolist.scss";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";


const TodoItem = ({todo}) => {
  const [editList, setEditList] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // const [editValues, setEditValues] = useState([]);
  // Load Context
  const {theme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;

  // Lay state, dispatch để tránh bị nhầm dispatch = state
  const [state, dispatch] = useStore();

  const {stateEdit, editValues, isCompletes} = state;
  // console.log(stateEdit, editList, editValues)
  // console.log(isComplete);
  // Style
  const style = isLightTheme ? light : dark;

  const {title, id} = todo;

  const handleDeleteList = () => {
    dispatch({
      type: DELETE_TODO,
      payload: {id: todo.id, title},
    });
  };

  const handleChangeList = (e) => {
    dispatch({
      type: ENTER_EDIT,
      payload: e.target.value,
    });
  };

  const handleAddList = () => {
    if (editValues !== "") {
      dispatch({
        type: EDIT_TODO,
        payload: {
          id,
          title: editValues,
        },
      });
      setEditList(!editList);
      // Chưa xử lý global state editlist
      dispatch({
        type: STATE_EDIT,
        payload: null,
      });
    }
  };

  const handleEditList = () => {
    dispatch({
      type: STATE_EDIT,
      payload: null,
    });
    setEditList(!editList);
  };

  return (
    <div className="todoItem">
      <label className="checkbox-container">
        <input
          type="checkbox"
          readOnly
          className="checkboxItem"
          onClick={() => setIsComplete(!isComplete)}
        />
        <span className="checkmark"></span>
      </label>
      <li
        key={id}
        style={style}
        className={isComplete ? "todo-items active-disable" : "todo-items"}>
        {editList ? (
          <input
            type="text"
            className="todo-item_add placeholder"
            onChange={handleChangeList}
            value={editValues}
            autoFocus
          />
        ) : (
          title
        )}
      </li>
      <div className="todo-item_btn">
        {isComplete ? (
          ""
        ) : (
          <button className="btn btn-edit" onClick={editList ? handleAddList : handleEditList}>
            {editList ? <RiAddCircleFill/> : <MdModeEditOutline/>}
          </button>
        )}
        <button className="btn btn-delete" onClick={handleDeleteList}>
          <AiFillDelete/>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
