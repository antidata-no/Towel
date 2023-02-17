// model not necessary anymore, delete file whenever

import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const PackitemSchema = new Schema({
  title: String,
  checked: Boolean,
  order: Number
});

const PackitemModel = mongoose.model("Packitem", PackitemSchema);

export default PackitemModel;
