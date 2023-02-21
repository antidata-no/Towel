import React, { useEffect, useReducer, useState } from "react";
import {
  CategoryContext,
  CategoryDispatchContext,
  
} from "./assets/ContextsAndReducers/CategoryContext";
import { ICategory } from "./assets/interfaces/Interfaces";
import { apiGetItemlist } from "./assets/api/apiGetItemlist";
import "./assets/CSS/App.css";
import CreateCategory from "./assets/components/CreateCategory";
import ListCategories from "./assets/components/ListCategories";
import { apiGetCategories } from "./assets/api/apiGetCategories";
import Frame from "./assets/components/UI/Frame";
import ErrorModal from "./assets/components/UI/ErrorModal";
import {
  SetShowerrorModalContext,
  ShowerrorModalContext,
} from "./assets/ContextsAndReducers/ModalContext";
import categoryReducer from "./assets/ContextsAndReducers/CategoryReducer";

function App() {
  let initialCategories: ICategory[] = [];
  const [categories, dispatch] = useReducer(categoryReducer, initialCategories);
  const [showerror, setShowerror] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      initialCategories = await apiGetCategories();
      await dispatch({ type: "set", payload: initialCategories });
    }
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Frame>
        <ErrorModal
          title="Empty field"
          message="Please enter a valid category name"
          show={showerror}
          setShow={setShowerror}
        />
        <ShowerrorModalContext.Provider value={showerror}>
          <SetShowerrorModalContext.Provider value={setShowerror}>
            <CategoryContext.Provider value={categories}>
              <CategoryDispatchContext.Provider value={dispatch}>
                <CreateCategory />
                <ListCategories />
              </CategoryDispatchContext.Provider>
            </CategoryContext.Provider>
          </SetShowerrorModalContext.Provider>
        </ShowerrorModalContext.Provider>
      </Frame>
    </div>
  );
}

export default App;
