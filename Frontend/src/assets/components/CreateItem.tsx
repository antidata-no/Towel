import React, { FunctionComponent, useContext, useState } from "react";
import "../CSS/App.css";
import { IPackitem, ICategory } from "../interfaces/Interfaces";
import { apiCreatePackitem } from "../api/apiCreatePackitem";
//import { PackitemDispatchContext } from "../contextreducer/PackitemContext";
import { CategoryDispatchContext } from "../ContextsAndReducers/CategoryContext";
import Button from "./UI/Button";
import Input from "./UI/Input";

import { SetShowerrorModalContext } from "../ContextsAndReducers/ModalContext";

const CreateItem = ({ category }: { category: ICategory }) => {
  const [itemtitle, setItemtitle] = useState("");
  const dispatchCategories = useContext(CategoryDispatchContext);
  const setError = useContext(SetShowerrorModalContext);

  async function handleCreateItem(e: React.FormEvent) {
    e.preventDefault();

    if (itemtitle.trim().length === 0) {
      setError(true);
      return;
    }
    const tempID: IPackitem["_id"] = "tempID"; // todo: generate id instead
    const packitem: IPackitem = {
      _id: `${tempID}`,
      title: `${itemtitle}`,
      checked: false,
    };

    category.items.push(packitem);

    dispatchCategories({ type: "additem", payload: [category] });
    setItemtitle("");

    let packitemfromapi = await apiCreatePackitem(category._id, packitem);

    let updatedcategory: ICategory = {...category};
    for (let i = 0; i < updatedcategory.items.length ; i++) {
      if (updatedcategory.items[i]._id === tempID) {
        updatedcategory.items[i] = packitemfromapi;
      } 
    };
    dispatchCategories({ type: "replace", payload: [category, updatedcategory] });
  }

  return (
    <div>
      <Input
        onSubmitHandler={handleCreateItem}
        value={itemtitle}
        labelid="packitem-title"
        labelText="Add item"
        placeholder="Type here"
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItemtitle(e.target.value);
        }}
        buttonText="Add item"
      />

    </div>
  );
};

export default CreateItem;


