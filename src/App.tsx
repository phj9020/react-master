import React from 'react';
import Router from "./Router";
import { GlobalStyle } from "./styles/reset";
import {ReactQueryDevtools} from "react-query/devtools";



function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
