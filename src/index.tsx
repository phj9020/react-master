import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';

const DarkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const LightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
