import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./src/routers/index.js";
import connectMongoDB from "./config/dbconfig.js";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
connectMongoDB(`mongodb://localhost:27017/asm-react-fall24`);

app.use("/api", router);

app.listen(8000);
export const viteNodeApp = app;
