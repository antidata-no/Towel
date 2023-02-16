import { Request, Response } from "express";
import CategoryModel from "../models/Category";


// todo: change to method put
export  const deleteCategoryController = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, {
      checked: req.body.checked,
    });
    res.json(updatedCategory);
};
