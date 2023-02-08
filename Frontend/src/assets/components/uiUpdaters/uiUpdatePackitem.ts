import { IPackitem } from "../../interfaces/IPackitems";

export const uiUpdatePackitem = (
  idToUpdate: IPackitem["_id"],
  newPackitem: IPackitem
): boolean => {
  let found: boolean = false;
  // optimistic update
  // updating id in the optimistic updated item
  setPackItems((currentItems) => {
    const updatedItems = currentItems.map((c: IPackitem) => {
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
