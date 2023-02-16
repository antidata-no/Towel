import React from "react";
import DeletePackitemButton from "./DeletePackitemButton";
import ShowPackItem from "./ShowPackitem";
import { IPackitem, ICategory } from "../interfaces/Interfaces";

const ListItems = ({ category }: { category: ICategory }) => {
  return (
    <div className="flex">
      <ul className="w-80">
        {category.items.map((packitem) => (
          <li key={packitem._id} className="flex">
            {packitem.title}

            <ShowPackItem categoryid={category._id} packitem={packitem} />

            {/*<DeletePackitemButton deleteThisPackitem={packitem} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
