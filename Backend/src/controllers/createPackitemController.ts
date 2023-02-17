import { Request, Response } from "express";
import CategoryModel from "../models/Category";
import Packitem from "../models/Packitem";

export const createPackitemController = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { title, checked } = req.body;

  const category = await CategoryModel.findById(categoryId);
  if (!category)
    return res
      .status(400)
      .send(
        `Could not add item, no category with id ${categoryId}.`
      );
  const newPackitem = new Packitem({
    title: title,
    checked: checked,
    order: 0
  });
  category.items.push(newPackitem);
  const savedCategory = await category.save();
  res.json(savedCategory.items[savedCategory.items.length -1]);
};
  
