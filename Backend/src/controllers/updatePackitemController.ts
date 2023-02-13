import { Request, Response } from "express";
import Packitem from "../models/Packitem";

export  const deletePackitemsController = async (req: Request, res: Response) => {
    const packitemId = req.params.packitemId;
    const updatedPackitem = await Packitem.findByIdAndUpdate(packitemId, {
      checked: req.body.checked,
    });
    res.json(updatedPackitem);
};
