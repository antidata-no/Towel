import { ICategory, IDispatchAction } from "../interfaces/Interfaces";

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
  
  export default categoryReducer;