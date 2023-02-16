import mongoose from "mongoose";

const Schema = mongoose.Schema;

// reminder: mongoose adds _id on both category and items automatically.
//const ObjectId = Schema.Types.ObjectId; not necessary. will break if added.

const CategorySchema = new Schema({
  //_id: Schema.Types.ObjectId,
  title: String,
  items: [
    {
      //_id: Schema.Types.ObjectId,
      title: String,
      checked: Boolean,
      order: Number,
    },
  ],
});

const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
