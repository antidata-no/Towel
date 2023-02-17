import React, { FunctionComponent, useState } from "react";
import { ICategory, IPackitem, IShowPackitem } from "../interfaces/Interfaces";
import { apiTogglePackitemCheckbox } from "../api/apiToggleCheckbox";
import "../CSS/App.css";

const ShowPackItem = ({ categoryid, packitem }: IShowPackitem) => {
  const [checkedstate, setCheckedstate] = useState(packitem.checked);

  async function handleCheckboxPackitem() {
    packitem.checked = !checkedstate;
    setCheckedstate(packitem.checked);
    await apiTogglePackitemCheckbox(categoryid, packitem);
  }

  return (
    <div className="flex border-b border-gray-200 bg-teal-100 w-full">
      <label htmlFor="checked">
        <input
          name="checked"
          type="checkbox"
          checked={checkedstate}
          onChange={() => handleCheckboxPackitem()}
        ></input>
      </label>
      <p className={
          checkedstate ? "ml-2 line-through font-bold" : "ml-2 font-bold"
        }>
        {packitem.title}
      </p>
    </div>
  );
};

export default ShowPackItem;
