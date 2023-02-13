import { Request, Response } from "express";
import Packitem from "../models/Packitem";

export const createPackitemController = async (
  req: Request,
  res: Response
) => {
  const newPackitem = new Packitem({
    title: req.body.title,
    checked: req.body.checked,
  });
  const createdPackitem = await newPackitem.save();
  res.json(createdPackitem);
};
