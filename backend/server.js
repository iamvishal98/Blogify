import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
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

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
// app.post("/api/users/post", upload.single("file"), (req, res) => {
//   const { originalname, path } = req.file;
//   const parts = originalname.split(".");
//   const ext = parts[parts.length - 1];
//   fs.renameSync(path, path + "." + ext);
//   res.json({ ext });
// });
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
