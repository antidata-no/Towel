import React, { useContext } from "react";
import "../CSS/App.css";
import {
	ICategory,
	IDeletePackitem,
	IPackitem,
} from "../interfaces/Interfaces";
import { apiDeletePackitem } from "../api/apiDeletePackitem";
import { CategoryDispatchContext } from "../ContextsAndReducers/CategoryContext";
import Button from "./UI/Button";
import XinCircle from "./UI/XinCircle";

const DeletePackitemButton = ({ category, packitem }: IDeletePackitem) => {
	const dispatchCategories = useContext(CategoryDispatchContext);

	async function handleDeletePackitem() {
		/* todo: optimistic update:
      delete from ui, get position in return
        add optional argument to add: position
      delete from api
      if not successful, issue error and insert in ui again
    */
		await apiDeletePackitem(category._id, packitem);

		let updatedcategory: ICategory = { ...category };

		updatedcategory.items = category.items.filter((item: IPackitem) => {
			return item._id !== packitem._id;
		});
		dispatchCategories({
			type: "replace",
			payload: [category, updatedcategory],
		});
	}
	return (
		<button className="cursor-pointer" aria-label="delete" onClick={() => handleDeletePackitem()}>
			<XinCircle/>
		</button>
	);

};

export default DeletePackitemButton;
