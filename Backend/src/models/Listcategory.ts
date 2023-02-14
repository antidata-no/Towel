import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const ListcategorySchema = new Schema({
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

const ListcategoryModel = mongoose.model("Listcategory", ListcategorySchema);

export default ListcategoryModel;
