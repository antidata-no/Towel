import express, { application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import Packitem from "./models/Packitem";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5001;

const app = express();

app.use(cors<Request>({
    origin: "http://127.0.0.1:5173",
    })
);
app.use(express.json());

mongoose.set("strictQuery", false);

app.get("/listpackitems", async (req: Request, res: Response) => {
    const packitems = await Packitem.find();
    res.json(packitems);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, moo!");
});

app.post("/packitems", async (req: Request, res: Response) => {
  const newPackitem = new Packitem({
    title: req.body.title,
    checked: req.body.checked
  });
  const createdPackitem = await newPackitem.save();
  res.json(createdPackitem);
});

app.delete("/packitems/:packitemId",async (req: Request, res: Response) => {
    const packitemId = req.params.packitemId;
    const deletedPackitem = await Packitem.findByIdAndDelete(packitemId);
    res.json(deletedPackitem);
});

app.post("/updatepackitem/:packitemId",async (req: Request, res: Response) => {
  const packitemId = req.params.packitemId;
  const updatedPackitem = await Packitem.findByIdAndUpdate(packitemId, {
    checked: req.body.checked,
  });
  res.json(updatedPackitem);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}.`);
  app.listen(PORT);
});
