import React, { Reducer, ReducerAction, useReducer } from "react";
import {
  PackitemsContext,
  PackitemDispatchContext,
  packitemsReducer
} from "./assets/contextreducer/PackitemContext";
import { IPackitem } from "./assets/interfaces/IPackitems";
import PackitemFrame from "./assets/components/PackitemFrame";
import "./assets/CSS/App.css";

const initialList: IPackitem[] = [];

function App() {
  const [state, dispatch] = useReducer(packitemsReducer, initialList);

  return (
    <div className="App">
      <PackitemsContext.Provider value={state}>
        <PackitemDispatchContext.Provider value={dispatch}>
          <PackitemFrame />
        </PackitemDispatchContext.Provider>
      </PackitemsContext.Provider>
    </div>
  );
}

export default App;


