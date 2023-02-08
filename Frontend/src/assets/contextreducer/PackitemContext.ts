import { createContext } from "react";
import { IPackitem, IDispatchAction } from "../interfaces/IPackitems";

export const PackitemsContext = createContext<IPackitem[] | undefined>(
  undefined
);
export const PackitemDispatchContext = createContext<React.Dispatch<IDispatchAction> | undefined>(undefined);


export const packitemsReducer = (
    packitems: IPackitem[],
    action: IDispatchAction
  ): IPackitem[] => {
    switch (action.type) {
      case 'addsomething':
          console.log("add something");
          return [...packitems, action.payload];
      case 'deletesomething':
          console.log("delete something");
      default:
          console.log("nothing");
          return packitems;
    }
  };