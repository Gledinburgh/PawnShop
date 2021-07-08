import React, { Component, createContext, useState, useEffect } from 'react';

export const themes = {
  light: {
    background: "#ff517d",
    fontFamily: 'Suez One',
    position: 'sticky'

  },
  dark: {
    background: "#333",
    fontFamily: 'Courier new',
    position: 'sticky'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggleTheme: () => { }
}

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, [dark])

  const toggleTheme = () => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
    console.log('isDark:', isDark)
    console.log('dark:', dark)
    console.log('local storage:', isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export { ThemeProvider, ThemeContext }
