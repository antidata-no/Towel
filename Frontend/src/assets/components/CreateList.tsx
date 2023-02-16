import React, { useContext, useState } from "react";
import "../CSS/App.css";
import { IListcategory } from "../interfaces/IPackitems";
import { apiCreatePackitem } from "../api/apiCreatePackitem";
import { PackitemDispatchContext } from "../contextreducer/PackitemContext";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const dispatchListitems = useContext(PackitemDispatchContext);

  async function handleCreateList(e: React.FormEvent) {
    e.preventDefault();
    const tempID: IListcategory["_id"] = "tempID"; // todo: generate id instead
    let packitem: IListcategory = {
      _id: `${tempID}`,
      title: `${title}`,
      items: []
    };
    
    //dispatchListitems({type: "add", payload: [packitem]});    
    setTitle("");
    //let packitemfromapi = await apiCreatePackitem(packitem);
    //dispatchListitems({type: "replace", payload: [packitem, packitemfromapi]});
 
  }

  return (
    <div>
      <form onSubmit={handleCreateList}>
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
