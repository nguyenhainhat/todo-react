import React, { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import  TodoContext  from '../contexts/CreateContext'
import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO } from '../reducers/types'
import { useStore } from '../Store'
import {ENTER_VALUE} from "../reducers/types";
import "../sass/todolist.scss";


const TodoForm = () => {
  // Load context
  const { themeState } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = themeState

  const [state, dispatch ] = useStore()

  const {enterValue} = state

  const onTitleChange = event => {
    dispatch({
      type: ENTER_VALUE,
      payload: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title: enterValue
        }
      }
    })
    dispatch({
      type: ENTER_VALUE,
      payload: ''
    })
  }

  // Style
  const style = isLightTheme ? light : dark

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Enter a new todo...'
        onChange={onTitleChange}
        value={enterValue}
        required
      />
      <button className='btn-form-add'>
        <span style={style} >Add</span>
      </button>
    </form>
  )
}

export default TodoForm
