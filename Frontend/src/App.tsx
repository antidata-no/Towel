import React, { useEffect, useReducer } from "react";
import {
  PackitemsContext,
  PackitemDispatchContext,
  packitemsReducer,
} from "./assets/contextreducer/PackitemContext";
import { IPackitem } from "./assets/interfaces/IPackitems";
import CreateItem from "./assets/components/CreateItem";
import ListItems from "./assets/components/ListItems";
import { apiGetItemlist } from "./assets/api/apiGetItemlist";
import "./assets/CSS/App.css";

function App() {
  let initialList: IPackitem[] = [];
  const [listitems, dispatch] = useReducer(packitemsReducer, initialList);

  useEffect(() => {
    async function fetchPackitems() {
      initialList = await apiGetItemlist();
      await dispatch({type: "set", payload: initialList});
      console.log("reducer");
      console.log(listitems);
    }
    fetchPackitems();
  }, []);
 
  return (
    <div className="App">
      <PackitemsContext.Provider value={listitems}>
        <PackitemDispatchContext.Provider value={dispatch}>
          <CreateItem />
          <ListItems />
        </PackitemDispatchContext.Provider>
      </PackitemsContext.Provider>
    </div>
  );
}

export default App;
