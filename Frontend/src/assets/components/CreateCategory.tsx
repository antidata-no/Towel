import React, { useContext, useState } from "react";
import "../CSS/App.css";
import { ICategory } from "../interfaces/Interfaces";
import { CategoryDispatchContext } from "../contextreducer/CategoryContext";
import { apiCreateCategory } from "../api/apiCreateCategory";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const dispatchCategories = useContext(CategoryDispatchContext);

  async function handleCreateCategory(e: React.FormEvent) {
    e.preventDefault();
    const tempID: ICategory["_id"] = "tempID"; // todo: generate id instead
    let newcategory: ICategory = {
      _id: `${tempID}`,
      title: `${title}`,
      items: []
    };
    
    dispatchCategories({type: "add", payload: [newcategory]});    
    setTitle("");
    let categoryfromapi = await apiCreateCategory(newcategory);
    dispatchCategories({type: "replace", payload: [newcategory, categoryfromapi]});
 
  }

  return (
    <div>
      <form onSubmit={handleCreateCategory}>
        <label htmlFor="listcategory-title">Category title</label>
        <input className="border"
          id="listcategory-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button className="border-2 font-extrabold">Add category</button>
      </form>
    </div>
  );
};

export default CreateList;
