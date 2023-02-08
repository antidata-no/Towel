import React, { FunctionComponent, useEffect, useState } from "react";
import "../CSS/App.css";
import { IDeletePackitem, IPackitem } from "../interfaces/IPackitems";
import { apiDeletePackitem } from "../api/apiDeletePackitem";

const DeletePackitemButton: FunctionComponent<IDeletePackitem> = ( { uiDeletePackitemfromList, deleteThisPackitem }) => {
  async function handleDeletePackitem() {
    await apiDeletePackitem(deleteThisPackitem);
    uiDeletePackitemfromList(deleteThisPackitem);
  }
  return (
    <div className="deletePackitemButton">
      <button onClick={() => handleDeletePackitem()}>X</button>
    </div>
  );
}

export default DeletePackitemButton;
