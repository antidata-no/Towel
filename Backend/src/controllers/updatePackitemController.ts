import { Request, Response } from "express";
import CategoryModel from "../models/Category";

export const updatePackitemController = async (req: Request, res: Response) => {
	const { categoryId, packitemId } = req.params;
	const { title, checked, order } = req.body;
	const category = await CategoryModel.updateOne(
		{
			_id: categoryId,
			items: { $elemMatch: { _id: packitemId } },
		},
		{
			$set: {
				"items.$": {
					title: title,
					checked: checked,
					order: order,
				},
			},
		}
	);
	if (!category)
		return res
			.status(400)
			.send(`Could not update item, no category with id ${categoryId}.`);
	res.json(category);
};
