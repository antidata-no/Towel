import React, { useEffect, useReducer } from "react";
import {
  CategoryContext,
  CategoryDispatchContext,
  categoryReducer,
} from "./assets/contextreducer/CategoryContext";
import { ICategory } from "./assets/interfaces/Interfaces";
import { apiGetItemlist } from "./assets/api/apiGetItemlist";
import "./assets/CSS/App.css";
import CreateCategory from "./assets/components/CreateCategory";
import ListCategories from "./assets/components/ListCategories";
import { apiGetCategories } from "./assets/api/apiGetCategories";

function App() {
  let initialCategories: ICategory[] = [];
  const [categories, dispatch] = useReducer(categoryReducer, initialCategories);

  useEffect(() => {
    async function fetchCategories() {
      initialCategories = await apiGetCategories();
      await dispatch({type: "set", payload: initialCategories});
    }
    fetchCategories();
  }, []);
 
  return (
    <div className="App">
      <CategoryContext.Provider value={categories}>
        <CategoryDispatchContext.Provider value={dispatch}>
          <CreateCategory />
          <ListCategories />
        </CategoryDispatchContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
