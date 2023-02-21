import React, { useContext, useState } from "react";
//import { Collapse } from "react-daisyui";
import { CategoryContext } from "../contextreducer/CategoryContext";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";
import Collapse from "./UI/Collapse";

import {
  ShowerrorModalContext,
  SetShowerrorModalContext,
} from "../contextreducer/ModalContext";
import ErrorModal from "./UI/ErrorModal";

const ListCategories = () => {
  const categories = useContext(CategoryContext);
  const [showerror, setShowerror] = useState(false);

  return (
    <>
      <ErrorModal
        title="Empty field"
        message="Please enter a valid category name"
        show={showerror}
        setShow={setShowerror}
      />
      <ShowerrorModalContext.Provider value={showerror}>
        <SetShowerrorModalContext.Provider value={setShowerror}>
          {categories.map((category) => (
            <Collapse title={category.title} key={category._id}>
              <CreateItem category={category} />
              <ListItems category={category} />
            </Collapse>
          ))}
        </SetShowerrorModalContext.Provider>
      </ShowerrorModalContext.Provider>
    </>
  );
};

export default ListCategories;
