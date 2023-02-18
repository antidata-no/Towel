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
      <div className="form-check">
        <input
          name="checked"
          checked={checkedstate}
          onChange={() => handleCheckboxPackitem()}
          className="hidden form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          value=""
          id={packitem._id}
          
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor={packitem._id}
        >
          <span className={checkedstate ? "line-through" : ""}>
            {packitem.title}
          </span>{" "}
        </label>
      </div>
    </>
  );
};

export default ShowPackItem;

/*

         form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer


          */
