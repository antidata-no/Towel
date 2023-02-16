import { Request, Response } from "express";
import CategoryModel from "../models/Category";
import Packitem from "../models/Packitem";

// todo: change to method put
export const updatePackitemController = async (req: Request, res: Response) => {
  console.log(req.params.categoryId);
  console.log(req.params.packitemId);
  const category = await CategoryModel.updateOne(
    {
      _id: req.params.categoryId,
      items: { $elemMatch: { _id: req.params.packitemId } },
    },
    {
      $set: {
        "items.$": {
          title: req.body.title,
          checked: req.body.checked,
          order: req.body.order
        },
      },
    }
  );
  if (!category)
    return res
      .status(400)
      .send(
        `Could not update item, no category with id ${req.params.categoryId}.`
      );
  res.json(category);
  /*
  const packitemId = category.items.find({}, { _id: req.params.packitemId });
  const updatedPackitem = await Packitem.findByIdAndUpdate(packitemId, {
    checked: req.body.checked,
  });
  res.json(updatedPackitem);*/
};
/*
export const createPackitemController = async (req: Request, res: Response) => {
  const category = await CategoryModel.findById(req.params.categoryId);
  if (!category)
    return res
      .status(400)
      .send(
        `Could not add item, no category with id ${req.params.categoryId}.`
      );
  const newPackitem = new Packitem({
    title: req.body.title,
    checked: req.body.checked,
  });
  category.items.push(newPackitem);
  const savedCategory = await category.save();
  res.json(savedCategory.items[-1]);
};
*/
