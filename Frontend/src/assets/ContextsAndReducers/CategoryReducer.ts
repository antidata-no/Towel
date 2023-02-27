import {
	ICategory,
	IDispatchAction,
	IPackitem,
} from "../interfaces/Interfaces";

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
		// case "deleteitem":
		//   //todo: debrittle
		//   const CategorytoDeleteIn = action.payload[0]._id;
		//   return Categories.map((i: ICategory) => {
		//     if (i._id === CategorytoDeleteIn) {
		//       i.items = i.items.filter((item: IPackitem) => {
		//         item._id !== action.payload[0].items[0]._id;
		//       });
		//     }
		//     return i;
		//   });
		default:
			return Categories;
	}
};

export default categoryReducer;
