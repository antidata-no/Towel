import React, { FunctionComponent, useState } from "react";
import { IPackitem } from "../interfaces/IPackitems";
import { apiTogglePackitemCheckbox } from "../api/apiToggleCheckbox";
import "../CSS/App.css";

const ShowPackItem: FunctionComponent<IPackitem> = ({
  title,
  _id,
  checked,
}) => {
  const [checkedstate, setCheckedstate] = useState(checked);

  async function handleCheckboxPackitem() {
    checked = !checkedstate;
    setCheckedstate(checked);
    await apiTogglePackitemCheckbox(_id, checked);
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
      <p className={checkedstate ? "ml-2 line-through font-bold" : "ml-2 font-bold"}>{title} </p>
    </div>
  );
};

export default ShowPackItem;
