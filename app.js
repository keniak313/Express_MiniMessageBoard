import dotenv from "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { indexRouter } from "./routes/indexRouter.js";
import { newRouter } from "./routes/newRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/", indexRouter);

const hostname = "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.listen(PORT, hostname, () => {
  console.log("PORT: " + PORT);
});
