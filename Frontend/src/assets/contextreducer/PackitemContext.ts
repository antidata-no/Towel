// delete this file, do not use
/*
import { createContext } from "react";
import { IPackitem, ICategory, IDispatchActionPackitem } from "../interfaces/Interfaces";

const initPackitem: IPackitem = {
  title: "",
  _id: "",
  checked: false,
};
const dispatchTemplate = () => {};

export const PackitemsContext = createContext<IPackitem[]>([initPackitem]);
export const PackitemDispatchContext = createContext<React.Dispatch<IDispatchActionPackitem>>(dispatchTemplate);

export const packitemsReducer = (category: ICategory["_id"], packitems: IPackitem[], action: IDispatchActionPackitem): IPackitem[] => {
  switch (action.type) {
    case "set":
      return [...action.payload];
    case "add":
      return [...packitems, ...action.payload];
    case "delete":
        return packitems.filter(
        (packitem) => packitem._id !== action.payload[0]._id
      );
    case "replace":
        const [replacethis, withthis] = action.payload;
        return packitems.map((i: IPackitem) => {
            if (i._id === replacethis._id) {
              return withthis;
            } else {
              return i;
            }
          });
    default:
      return packitems;
  }
};
*/