import express from "express";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createPost,
  getAllPost,
  getPost,
} from "../controllers/postController.js";

const upload = multer({ dest: "backend/uploads/" });
const router = express.Router();

router.post("/", protect, upload.single("file"), createPost);
router.get("/", getAllPost);
router.get("/:id", getPost);

export default router;
