import React, { useEffect, Reducer, ReducerAction, useReducer } from "react";
import {
  PackitemsContext,
  PackitemDispatchContext,
  packitemsReducer,
} from "./assets/contextreducer/PackitemContext";
import { IPackitem, IDispatchAction } from "./assets/interfaces/IPackitems";
import PackitemFrame from "./assets/components/PackitemFrame";
import { apiGetItemlist } from "./assets/api/apiGetItemlist";
import "./assets/CSS/App.css";

function App() {
  let initialList: IPackitem[] = [];
  /*let listitems = initialList;
  let dispatch: React.Dispatch<IDispatchAction> = () => {};
*/
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
          <PackitemFrame />
        </PackitemDispatchContext.Provider>
      </PackitemsContext.Provider>
    </div>
  );
}

export default App;
