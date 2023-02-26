import { Request, Response } from "express";
import CategoryModel from "../models/Category";
import Packitem from "../models/Packitem";

export const deletePackitemController = async (req: Request, res: Response) => {

  const { categoryId, packitemId } = req.params;
  const { title, checked, order } = req.body;
  const category = await CategoryModel.updateOne(
    {
      _id: categoryId,
    },
    {
      $pull: {
        items: {
          _id: packitemId,
        },
      },
    }
  );
  if (!category)
    return res
      .status(404)
      .send(
        `Could not delete item, no category with id ${categoryId} and/or no item with id ${packitemId}.`
      );
  res.json(category);
};
