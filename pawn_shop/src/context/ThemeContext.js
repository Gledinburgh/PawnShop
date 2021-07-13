import React, { Component, createContext, useState, useEffect, useCallback } from 'react';

export const themes = {
  light: {
    background: "#ff517d",
    fontFamily: 'Suez One',
    position: 'sticky'

  },
  dark: {
    background: "#ff517d",
    fontFamily: 'Suez One',
    position: 'sticky'
  }
}
const initialState = {
  dark: false,
  theme: themes.light,
  toggleTheme: () => { },
  playAudio: () => { },

}

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {

  const [dark, setDark] = useState(false);
  const [pageName, setPageName] = useState("PawnShop");

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, [dark])

  const handlePageNameChange = (pageName) => {
    setPageName(pageName);
  }

  const toggleTheme = () => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }
  const playAudio = useCallback(() => {
    const radio = document.getElementsByClassName("radio")[0];
    console.log("audio playing");
    radio.play();
  }, []);

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggleTheme, playAudio, pageName, handlePageNameChange }}>
      <audio className="radio">
        <source src="Come_On_Back_Jesus.mp3" type="audio/mpeg"></source>
      </audio>
      {children}
    </ThemeContext.Provider>
  )

}

export { ThemeProvider, ThemeContext }
