import React, { useContext } from "react";
import { CategoryContext } from "../contextreducer/CategoryContext";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";

const ListCategories = () => {
  const categories = useContext(CategoryContext);
  return (
    <div className="flex">
      <ul className="w-80">
        {categories.map((category) => (
          <li key={category._id} className="flex">
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">{category.title}</h1>
            {/*<DeleteCategory deleteThiscategory={category} /> */}
            <CreateItem category={category}/>
            <ListItems  category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategories;
