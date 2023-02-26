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
    <>
      <div className="form-control m-2">
        <label className="label cursor-pointer" htmlFor={packitem._id}>
          <div className="mr-2">
            <input
              name="checked"
              checked={checkedstate}
              onChange={() => handleCheckboxPackitem()}
              className="checkbox checkbox-accent"
              type="checkbox"
              value=""
              id={packitem._id}
            />
          </div>
          <span
            className={checkedstate ? "label-text line-through" : "label-text"}
          >
            {packitem.title}
          </span>
        </label>
      </div>
    </>
  );
};

export default ShowPackItem;
