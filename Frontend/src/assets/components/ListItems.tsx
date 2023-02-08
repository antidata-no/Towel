import React, { FunctionComponent, useEffect, useState } from "react";
import DeletePackitemButton from "./DeletePackitemButton";
import ShowPackItem from "./ShowPackitem";
import { IPackitemlist, IPackitem } from "../interfaces/IPackitems";

import "../CSS/App.css";

const ListItems: FunctionComponent<IPackitemlist> = ({
  packitemlist,
  uiDeletePackitemfromList,
}) => {

  return (
    <div className="ListItemsContainer">
      <ul className="packitemslist">
        {packitemlist.map((packitem) => (
          <li key={packitem._id}>
            <ShowPackItem
              title={packitem.title}
              _id={packitem._id}
              checked={packitem.checked}
            />
            <DeletePackitemButton
              uiDeletePackitemfromList={uiDeletePackitemfromList}
              deleteThisPackitem={packitem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
