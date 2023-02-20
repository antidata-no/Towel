import React, { FunctionComponent, useContext, useState } from "react";
import "../CSS/App.css";
import { IPackitem, ICategory } from "../interfaces/Interfaces";
import { apiCreatePackitem } from "../api/apiCreatePackitem";
//import { PackitemDispatchContext } from "../contextreducer/PackitemContext";
import { CategoryDispatchContext } from "../contextreducer/CategoryContext";
import Button from "./UI/Button";
import Input from "./UI/Input";

const CreateItem = ({ category }: { category: ICategory }) => {
  const [itemtitle, setItemtitle] = useState("");
  const dispatchCategories = useContext(CategoryDispatchContext);

  async function handleCreateItem(e: React.FormEvent) {
    e.preventDefault();
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

// todo: create errormodal, but only one, not for every input field

  return (
    <div>
      <Input
        onSubmitHandler={handleCreateItem}
        labelid="packitem-title"
        labelText="Add item"
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItemtitle(e.target.value);
        }}
        buttonText="Add item"
      />

    </div>
  );
};

export default CreateItem;

//let packitemfromapi = await apiCreatePackitem(packitem);
//dispatchCategories({type: "replaceitem", payload: [packitem, packitemfromapi]});

/*
  const [title, setTitle] = useState("");
  const dispatchListitems = useContext(PackitemDispatchContext);

  async function handleCreateItem(e: React.FormEvent) {
    e.preventDefault();
    const tempID: IPackitem["_id"] = "tempID"; // todo: generate id instead
    let packitem: IPackitem = {
      _id: `${tempID}`,
      title: `${title}`,
      checked: false,
    };
    
    dispatchListitems({type: "add", payload: [packitem]});    
    setTitle("");
    let packitemfromapi = await apiCreatePackitem(packitem);
    dispatchListitems({type: "replace", payload: [packitem, packitemfromapi]});
 */
