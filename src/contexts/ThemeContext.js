import React, { createContext, useState, useReducer } from 'react'
import { themeReducer } from '../reducers/ThemeReducer'
import {initState} from '../reducers/ThemeReducer'
import { THEME_STATE } from '../reducers/types'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

  const [themeState, dispatch] = useReducer(themeReducer, initState)
  const {isLightTheme} = themeState


  // Function to toggle theme
  const toggleTheme = () => {
    dispatch({
      type: THEME_STATE,
      payload: {
        isLightTheme
      }

    })
  }

  // Context data
  const themeContextData = {
    themeState,
    toggleTheme
  }

  // Return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
