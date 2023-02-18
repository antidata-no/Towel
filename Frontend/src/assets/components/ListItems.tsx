import React from "react";
import DeletePackitemButton from "./DeletePackitemButton";
import ShowPackItem from "./ShowPackitem";
import { IPackitem, ICategory } from "../interfaces/Interfaces";

const ListItems = ({ category }: { category: ICategory }) => {
  return (
    <div className="flex justify-center">
      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        {category.items.map((packitem) => (
          <li
            key={packitem._id}
            className="px-6 py-2 border-b border-gray-200 w-full"
          >
            <ShowPackItem categoryid={category._id} packitem={packitem} />

            {/*<DeletePackitemButton deleteThisPackitem={packitem} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
