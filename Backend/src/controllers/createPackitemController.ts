import { Request, Response } from "express";
import CategoryModel from "../models/Category";
import Packitem from "../models/Packitem";

export const createPackitemController = async (
  req: Request,
  res: Response
) => {
  const category = await CategoryModel.findById(req.params.categoryId);
  if (!category) return res.status(400).send(`Could not add item, no category with id ${req.params.categoryId}.`);
  const newPackitem = new Packitem({
    title: req.body.title,
    checked: req.body.checked,
  });
  category.items.push(newPackitem);  
  const createdPackitem = await category.save();
  res.json(createdPackitem);
};
