import React, { useContext } from "react";
//import { Collapse } from "react-daisyui";
import { CategoryContext } from "../contextreducer/CategoryContext";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";
import Collapse from "./UI/Collapse";

const ListCategories = () => {
  const categories = useContext(CategoryContext);
  return (
    <>
      {categories.map((category) => (
        <Collapse title={category.title} key={category._id}>
          <CreateItem category={category} />
          <ListItems category={category} />
        </Collapse>
      ))}
    </>
  );
};

export default ListCategories;

/*

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            {category.title}
          </div>
          <div className="collapse-content">
            <CreateItem category={category} />
            <ListItems category={category} />
          </div>
        </div>
      */
