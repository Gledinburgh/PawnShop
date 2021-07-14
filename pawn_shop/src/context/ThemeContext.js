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
  fireAdvert: true,
  toggleTheme: () => { },
  playAudio: () => { },

}

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {

  const [fireAdvert, setFireAdvert] = useState(true);
  const [dark, setDark] = useState(false);
  const [pageName, setPageName] = useState("PawnShop");

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
    console.log("fireAdvert", fireAdvert)
    if (fireAdvert && pageName === "PawnShop") advertTimer();
  }, [dark, fireAdvert, pageName]);

  const advertTimer = () => {
    if (pageName === "PawnShop" && fireAdvert) {
      console.log("advertTimer fired", pageName)
      setFireAdvert(false)
      setTimeout(() => { setFireAdvert(true) }, 10000)
    }
  }

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
    <ThemeContext.Provider value={{ theme, dark, toggleTheme, playAudio, pageName, handlePageNameChange, fireAdvert }}>
      <audio className="radio">
        <source src="Come_On_Back_Jesus.mp3" type="audio/mpeg"></source>
      </audio>
      {children}
    </ThemeContext.Provider>
  )

}

export { ThemeProvider, ThemeContext }
