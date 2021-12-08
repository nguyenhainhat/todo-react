import React, { useState, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import  TodoContext  from '../contexts/CreateContext'
import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO } from '../reducers/types'
import { useStore } from '../Store'
import {ENTER_VALUE} from "../reducers/types";

const TodoForm = () => {
  // Load context
  const { theme } = useContext(ThemeContext)
  const { isLightTheme, light, dark } = theme

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
      <input type='submit' value='Add' style={style} />
    </form>
  )
}

export default TodoForm
