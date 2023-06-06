import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import connectDb from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
