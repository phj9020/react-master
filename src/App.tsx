import React, { useState } from 'react';
import Router from "./Router";
import { GlobalStyle } from "./styles/reset";
import {ReactQueryDevtools} from "react-query/devtools";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme  } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';


function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
    </ThemeProvider>
  );
}

export default App;
