import express, { application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import Packitem from "./models/Packitem";
import dotenv from "dotenv";
import { listPackitemsController } from "./controllers/listPackitemsController";
import { createPackitemController } from "./controllers/createPackitemController";
 

dotenv.config();

const PORT = 5001;

const app = express();

app.use(cors<Request>({
    origin: "http://127.0.0.1:5173",
    })
);
app.use(express.json());

mongoose.set("strictQuery", false);

app.get("/listpackitems", listPackitemsController);
app.post("/packitem", createPackitemController);
app.delete("/packitem/:packitemId",createPackitemController);
app.post("/updatepackitem/:packitemId",createPackitemController);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, moo!");
});


mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}.`);
  app.listen(PORT);
});
