import React, { Component, createContext } from 'react';

export const themes = {
  lightStyle: {
    background: "#ff517d",
    'fontFamily': 'Suez One',
    position: 'sticky'

  },
  darkStyle: {
    color: '#ddd',
    ui: '#333',
    bg: '#555'
  }
}

export const ThemeContext = React.createContext(themes);

export const toggleTheme = () => {
  this.setState({ isLightTheme: !this.state.isLightTheme })
};
