// file not in use

import { Request, Response } from "express";
import Packitem from "../models/Packitem";

export const listPackitemsController = async (req: Request, res: Response) => {
	const packitems = await Packitem.find();
	res.json(packitems);
};
