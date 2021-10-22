import React from "react";
import Router from "./routes/Router";
import { GlobalState } from "./global/GlobalState";
import { GlobalStyle } from "./globalStyle";

export const GlobalStateContext = React.createContext()

const App = () => {

  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
};

export default App;
