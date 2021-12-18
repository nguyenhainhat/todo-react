import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  // State
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: 'rgb(255, 255, 255, 0.8)',
      color: 'black',
      'border': '1px solid #dadde1',
      transition: 'all 0.2s linear'
    },
    dark: {
      background: 'rgb(39, 39, 39)',
      color: '#ffff',
      'border': '1px solid #606770',
      transition: 'all 0.2s linear'

    }
  })

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme
    })
  }

  // Context data
  const themeContextData = {
    theme,
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
