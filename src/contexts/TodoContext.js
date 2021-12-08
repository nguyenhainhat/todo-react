import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from '../reducers/types'
import { initState } from '../reducers/TodoReducer'
import TodoContext from './CreateContext'

const TodoContextProvider = ({ children }) => {
  // State
  const [state, dispatch] = useReducer(todoReducer, initState)

  const {todos} = state

  // useEffect
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos }
    })
  }, [todos])

  const todoContextData = [
    state,
    dispatch
  ]

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
