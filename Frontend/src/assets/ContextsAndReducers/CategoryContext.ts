import { createContext } from "react";
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

const dispatchTemplate = () => {};

export const CategoryContext = createContext<ICategory[]>([initCategories]);
export const CategoryDispatchContext = createContext<React.Dispatch<IDispatchAction>>(dispatchTemplate);
