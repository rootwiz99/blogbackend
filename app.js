import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route";
import blogRouter from "./routes/blog-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const DATA_BASE = process.env.DATA_BASE;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(DATA_BASE)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected to Database and Listting to Localhost 5000")
  )
  .catch((err) => console.log(err));

//pmM0owvrHOxexyKh
