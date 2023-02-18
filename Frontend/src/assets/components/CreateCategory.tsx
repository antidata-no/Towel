import React, { useContext, useState } from "react";
import "../CSS/App.css";
import { ICategory, IError } from "../interfaces/Interfaces";
import { CategoryDispatchContext } from "../contextreducer/CategoryContext";
import { apiCreateCategory } from "../api/apiCreateCategory";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState({ title: "", message: "" });
  const dispatchCategories = useContext(CategoryDispatchContext);

  async function handleCreateCategory(e: React.FormEvent) {
    e.preventDefault();

    if (title.trim().length === 0) {
      setError({
        title: "Empty field",
        message: "Please enter a valid category name.",
      });
      return;
    }

    const tempID: ICategory["_id"] = "tempID"; // todo: generate id instead
    let newcategory: ICategory = {
      _id: `${tempID}`,
      title: `${title}`,
      items: [],
    };

    dispatchCategories({ type: "add", payload: [newcategory] });
    setTitle("");
    let categoryfromapi = await apiCreateCategory(newcategory);
    dispatchCategories({
      type: "replace",
      payload: [newcategory, categoryfromapi],
    });
  }

  const errorHandler = () => {
    setError({ title: "", message: "" });
  };

  return (
    <div>
      {error.title !== "" && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={handleCreateCategory}>
        <label htmlFor="listcategory-title">Category title</label>
        <input
          className="border"
          id="listcategory-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <Button type="submit">Add category</Button>
      </form>
    </div>
  );
};

export default CreateList;
