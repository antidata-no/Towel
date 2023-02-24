import React, { useContext, useState } from "react";
import "../CSS/App.css";
import { ICategory, IError } from "../interfaces/Interfaces";
import { CategoryDispatchContext } from "../ContextsAndReducers/CategoryContext";
import { apiCreateCategory } from "../api/apiCreateCategory";
import Button from "./UI/Button";

import Input from "./UI/Input";
import { SetShowerrorModalContext } from "../ContextsAndReducers/ModalContext";

const CreateList = () => {
  const [title, setTitle] = useState("");
  //const [error, setError] = useState<boolean>(false);
  const dispatchCategories = useContext(CategoryDispatchContext);
  const setError = useContext(SetShowerrorModalContext);

  async function handleCreateCategory(e: React.FormEvent) {
    e.preventDefault();

    if (title.trim().length === 0) {
      setError(true);
      return;
    }

    const tempID: ICategory["_id"] = "tempID"; // todo: generate id instead
    let newcategory: ICategory = {
      _id: `${tempID}`,
      title: `${title}`,
      items: [],
    };

    dispatchCategories({ type: "add", payload: [newcategory] });
    setTitle("");
    let categoryfromapi = await apiCreateCategory(newcategory);
    dispatchCategories({
      type: "replace",
      payload: [newcategory, categoryfromapi],
    });
  }

  return (
    <div>

{      <Input
        onSubmitHandler={handleCreateCategory}
        labelid="listcategory-title"
        labelText="Add category"
        placeholder="Type here"
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
        buttonText="Add category"
      />}
    </div>
  );
};

export default CreateList;
