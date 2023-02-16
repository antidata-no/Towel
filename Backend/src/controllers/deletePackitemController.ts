import { Request, Response } from "express";
import Packitem from "../models/Packitem";

export  const deletePackitemController = async (req: Request, res: Response) => {
    const packitemId = req.params.packitemId;
    const deletedPackitem = await Packitem.findByIdAndDelete(packitemId);
    res.json(deletedPackitem);
};
