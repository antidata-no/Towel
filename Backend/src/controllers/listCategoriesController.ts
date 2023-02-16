import { Request, Response } from "express";
import ListcategoryModel from "../models/Category";

export  const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await ListcategoryModel.find();
  res.json(categories);
};
