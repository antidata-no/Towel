import { Request, Response } from "express";
import CategoryModel from "../models/Category";


// todo: actually make it an update function
export  const updateCategoryController = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { checked } = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, {
      checked: checked,
    });
    res.json(updatedCategory);
};
