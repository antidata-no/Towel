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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6 text-red-600"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
	);
};

export default DeletePackitemButton;
