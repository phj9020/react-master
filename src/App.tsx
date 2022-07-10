import React, { useState } from 'react';
import Router from "./Router";
import { GlobalStyle } from "./styles/reset";
import {ReactQueryDevtools} from "react-query/devtools";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme  } from './theme';


function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current)=> !current);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router toggleDark={toggleDark} isDark={isDark} />
      <ReactQueryDevtools />
    </ThemeProvider>
  );
}

export default App;
