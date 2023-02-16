import { Request, Response } from "express";
import Packitem from "../models/Packitem";


// todo: change to method put
export  const updatePackitemController = async (req: Request, res: Response) => {
    const packitemId = req.params.packitemId;
    const updatedPackitem = await Packitem.findByIdAndUpdate(packitemId, {
      checked: req.body.checked,
    });
    res.json(updatedPackitem);
};
