import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";

const PackitemFrame: FunctionComponent = () => {
  return (
    <div className="PackitemFrame">
      <CreateItem />
      <ListItems />
    </div>
  );
};

export default PackitemFrame;
