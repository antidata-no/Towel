import React, { useContext } from "react";
import "../CSS/App.css";
import { IPackitem } from "../interfaces/IPackitems";
import { apiDeletePackitem } from "../api/apiDeletePackitem";
import { PackitemDispatchContext } from "../contextreducer/PackitemContext";

const DeletePackitemButton = ( {deleteThisPackitem}: {deleteThisPackitem: IPackitem} ) => {
  const dispatchListitems = useContext(PackitemDispatchContext);

  async function handleDeletePackitem() {
    /* optimistic update:
      delete from ui, get position in return
        add optional argument to add: position
      delete from api
      if not successful, issue error and insert in ui again
    */
    await apiDeletePackitem(deleteThisPackitem);
    dispatchListitems({type: "delete", payload: [deleteThisPackitem]});

  }
  return (
    <div className="deletePackitemButton">
      <button onClick={() => handleDeletePackitem()}>X</button>
    </div>
  );
}

export default DeletePackitemButton;
