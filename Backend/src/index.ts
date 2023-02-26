import express, { application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import Packitem from "./models/Packitem";
import dotenv from "dotenv";
import { listPackitemsController } from "./controllers/listPackitemsController";
import { createPackitemController } from "./controllers/createPackitemController";
import { listCategoriesController } from "./controllers/listCategoriesController"; 
import { createCategoryController } from "./controllers/createCategoryController";
import { deleteCategoryController } from "./controllers/deleteCategoryController";
import { updatePackitemController } from "./controllers/updatePackitemController";
import { deletePackitemController } from "./controllers/deletePackitemController";


dotenv.config();

const PORT = 5001;

const app = express();

app.use(cors<Request>({
    origin: "http://127.0.0.1:5173",
    })
);
app.use(express.json());

mongoose.set("strictQuery", false);

// list all categories with packitems
app.get("/category", listCategoriesController);

// create category
app.post("/category", createCategoryController);

// delete category
app.delete("/category/:categoryId",deleteCategoryController);

// update category
app.put("/category/:categoryId", createCategoryController);

// should not be necessary anymore
//app.get("/listpackitems", listPackitemsController);

// create packitem
app.post("/category/:categoryId/packitem", createPackitemController);

// delete packitem
app.delete("/category/:categoryId/packitem/:packitemId",deletePackitemController);

// update packitem.
app.put("/category/:categoryId/packitem/:packitemId",updatePackitemController);


mongoose.connect(process.env.MONGO_URL!).then(
  () => {
      console.log(`Listening on port ${PORT}.`);
      app.listen(PORT);
  },
  err => {
    console.log("Could not connect to database: " + err);
  }
);
