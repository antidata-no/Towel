import { createContext } from "react";
import { act } from "react-dom/test-utils";
import {
  IDispatchAction,
  ICategory,
  IPackitem,
} from "../interfaces/Interfaces";

const initCategories: ICategory = {
  title: "",
  _id: "",
  items: [],
};

const initPackitem: IPackitem = {
  title: "",
  _id: "",
  checked: false,
};

const dispatchTemplate = () => {};

export const CategoryContext = createContext<ICategory[]>([initCategories]);
export const CategoryDispatchContext =
  createContext<React.Dispatch<IDispatchAction>>(dispatchTemplate);

export const categoryReducer = (
  Categories: ICategory[],
  action: IDispatchAction
): ICategory[] => {
  switch (action.type) {
    case "set":
      return [...action.payload];
    case "add":
      return [...Categories, ...action.payload];
    case "delete":
      return Categories.filter(
        (Categories) => Categories._id !== action.payload[0]._id
      );
    case "replace":
      const [replacethis, withthis] = action.payload;
      return Categories.map((i: ICategory) => {
        if (i._id === replacethis._id) {
          return withthis;
        } else {
          return i;
        }
      });
    case "additem":
      // todo: debrittle
      const CategorytoAddIn = action.payload[0]._id;
      return Categories.map((i: ICategory) => {
        if (i._id === CategorytoAddIn) {
          return action.payload[0];
        } else {
          return i;
        }
      });
    default:
      return Categories;
  }
};
