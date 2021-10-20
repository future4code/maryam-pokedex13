import React from "react";
import Router from "./routes/Router";
import { GlobalState } from "./global/GlobalState";

export const GlobalStateContext = React.createContext()

const App = () => {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
