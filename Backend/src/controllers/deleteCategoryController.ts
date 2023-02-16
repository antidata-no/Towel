import { Request, Response } from "express";
import CategoryModel from "../models/Category";

export  const deleteCategoryController = async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    res.json(deletedCategory);
};
