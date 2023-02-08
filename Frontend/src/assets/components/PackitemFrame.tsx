import React, { FunctionComponent, useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import ListItems from "./ListItems";
import { IPackitem } from "../interfaces/IPackitems";
import { apiGetItemlist } from "../api/apiGetItemlist";

const PackitemFrame: FunctionComponent = () => {
  const [packItems, setPackItems] = useState<IPackitem[]>([]);

  const uiAddPackitemtoList = (newPackitem: IPackitem) => {
    //console.log(newPackitem);
    setPackItems((prevPackitems) => [...prevPackitems, newPackitem]);
  };

  const uiUpdatePackitem = (
    idToUpdate: IPackitem["_id"],
    newPackitem: IPackitem
  ): boolean => {
    let found: boolean = false;
    // optimistic update
    // updating id in the optimistic updated item
    setPackItems((currentItems) => {
      const updatedItems = currentItems.map((c) => {
        if (c._id === idToUpdate) {
          return newPackitem;
        } else {
          return c;
        }
      });
      return updatedItems;
    });
    return true;
  };
  /*
  const updatePackItems = (
    idToUpdate: IPackitem["_id"],
    newPackitem: IPackitem
  ): IPackitem[] => {
    return packItems;
    const updatedPackItems: IPackitem[] = packItems.map((c) => {
      if (c._id === idToUpdate) {
        console.log(`found ${c._id}`);
        return newPackitem;
      } else {
        return c;
      }
    });
    console.log("updating");
    return updatedPackItems;
  };
  */

  const uiDeletePackitemfromList = (deleteThisPackItem: IPackitem) => {
    setPackItems((prevPackitems) =>
      prevPackitems.filter(
        (packitem) => packitem._id !== deleteThisPackItem._id
      )
    );
  };

  // useEffect må bort (?)
  useEffect(() => {
    async function fetchPackitems() {
      const itemList = await apiGetItemlist();
      setPackItems(itemList);
    }
    fetchPackitems();
  }, []);

  return (
    <div className="PackitemFrame">
      <CreateItem
        uiAddPackitemtoList={uiAddPackitemtoList}
        uiUpdatePackitem={uiUpdatePackitem}
      />
      <ListItems
        packitemlist={packItems}
        uiDeletePackitemfromList={uiDeletePackitemfromList}
      />
    </div>
  );
};

export default PackitemFrame;
