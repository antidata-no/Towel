import React, { useContext, useState } from "react";
import "../CSS/App.css";
import { IPackitem } from "../interfaces/IPackitems";
import { apiCreatePackitem } from "../api/apiCreatePackitem";
import { PackitemDispatchContext } from "../contextreducer/PackitemContext";

const CreateItem = () => {
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
 
  }

  return (
    <div>
      <form onSubmit={handleCreateItem}>
        <label htmlFor="packitem-title">Packitem title</label>
        <input className="border"
          id="packitem-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button className="border-2 font-extrabold">Add item</button>
      </form>
    </div>
  );
};

export default CreateItem;
