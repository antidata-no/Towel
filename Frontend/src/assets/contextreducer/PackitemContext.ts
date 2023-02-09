import { createContext } from "react";
import { IPackitem, IDispatchAction } from "../interfaces/IPackitems";

const initPackitem: IPackitem = {
  title: "",
  _id: "",
  checked: false,
};
const dispatchTemplate = () => {};

export const PackitemsContext = createContext<IPackitem[]>([initPackitem]);
export const PackitemDispatchContext =
  createContext<React.Dispatch<IDispatchAction>>(dispatchTemplate);

export const packitemsReducer = (
  packitems: IPackitem[],
  action: IDispatchAction
): IPackitem[] => {
  switch (action.type) {
    case "set":
      console.log("set something");
      return [...action.payload];
    case "add":
      console.log("add something");
      return [...packitems, ...action.payload];
    case "delete":
        console.log("delete something");
        return packitems.filter(
        (packitem) => packitem._id !== action.payload[0]._id
      );
    case "update":
        const [updatethis, withthis] = action.payload;
        console.log("update something");
        return packitems.map((c: IPackitem) => {
            if (c._id === updatethis._id) {
              return withthis;
            } else {
              return c;
            }
          });
    default:
      console.log("nothing");
      return packitems;
  }
};
