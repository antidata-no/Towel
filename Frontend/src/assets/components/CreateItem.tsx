import React, { FunctionComponent, useState } from "react";
import "../CSS/App.css";
import { IPackitem, IUpdateIPackitemlist } from "../interfaces/IPackitems";
import { apiCreatePackitem } from "../api/apiCreatePackitem";

const CreateItem: FunctionComponent<IUpdateIPackitemlist> = ({
  uiAddPackitemtoList,
  uiUpdatePackitem,
}) => {
  const [title, setTitle] = useState("");

  async function handleCreateItem(e: React.FormEvent) {
    e.preventDefault();
    const tempID: IPackitem["_id"] = "tempID";
    let packitem: IPackitem = {
      _id: `${tempID}`,
      title: `${title}`,
      checked: false,
    };

  
    uiAddPackitemtoList(packitem);
    setTitle("");
    let packitemfromapi = await apiCreatePackitem(packitem);
    uiUpdatePackitem(tempID, packitemfromapi);
 
  }

  return (
    <div className="CreateItem">
      <form onSubmit={handleCreateItem}>
        <label htmlFor="packitem-title">Packitem title</label>
        <input
          id="packitem-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Add item</button>
      </form>
    </div>
  );
};

export default CreateItem;
