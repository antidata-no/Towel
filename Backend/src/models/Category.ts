import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const CategorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  items: [
    {
      _id: Schema.Types.ObjectId,
      title: String,
      checked: Boolean,
      order: Number,
    },
  ],
});

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
