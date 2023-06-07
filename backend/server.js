import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
//import multer from "multer";
//import fs from "fs";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import connectDb from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

//const upload = multer({ dest: "uploads/" });
dotenv.config();
connectDb();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname + "/uploads");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/backend/uploads", express.static(__dirname + "/uploads"));
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
