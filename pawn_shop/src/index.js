import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

