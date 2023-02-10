import React, { useContext } from "react";
import DeletePackitemButton from "./DeletePackitemButton";
import ShowPackItem from "./ShowPackitem";
import { IPackitem } from "../interfaces/IPackitems";
import { PackitemsContext } from "../contextreducer/PackitemContext";

import "../CSS/App.css";

const ListItems = () => {

  const packitemlist = useContext(PackitemsContext);

  return (
    <div className="flex">
      <ul className="w-80">
        {packitemlist.map((packitem) => (
          <li key={packitem._id} className="flex">
            <ShowPackItem
              title={packitem.title}
              _id={packitem._id}
              checked={packitem.checked}
            />
            <DeletePackitemButton
              deleteThisPackitem={packitem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
