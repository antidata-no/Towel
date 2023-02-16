import { Request, Response } from "express";
import CategoryModel from "../models/Category";

export const createCategoryController = async (
  req: Request,
  res: Response
) => {
  const newCategory = new CategoryModel({
    title: req.body.title,
  });
  const createdCategory = await newCategory.save();
  res.json(createdCategory);
};

