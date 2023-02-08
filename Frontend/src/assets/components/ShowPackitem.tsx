import React, { FunctionComponent, useEffect, useState } from "react";
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
    <div>
      <label htmlFor="checked">
        <input
          name="Checked"
          type="checkbox"
          checked={checkedstate}
          onChange={() => handleCheckboxPackitem()}
        ></input>
      </label>
      {title}
    </div>
  );
};

export default ShowPackItem;
