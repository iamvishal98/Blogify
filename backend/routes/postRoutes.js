import express from "express";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";
import { createPost } from "../controllers/postController.js";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/", protect, upload.single("file"), createPost);

export default router;
