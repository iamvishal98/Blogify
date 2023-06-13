import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import connectDb from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDb();

const app = express();

app.use(
  cors({
    origin: true,
    preflightContinue: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/backend/uploads", express.static(__dirname + "/uploads"));
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server is ready [development]");
  });
}

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
