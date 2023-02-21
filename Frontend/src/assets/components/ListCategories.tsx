import React, { useContext, useState } from "react";
//import { Collapse } from "react-daisyui";
import { CategoryContext } from "../ContextsAndReducers/CategoryContext";
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
