import express from "express";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createPost,
  deletePost,
  editpost,
  getAllPost,
  getPost,
} from "../controllers/postController.js";

const upload = multer({ dest: "backend/uploads/" });
const router = express.Router();

router
  .route("/")
  .post(protect, upload.single("file"), createPost)
  .put(protect, upload.single("file"), editpost)
  .get(getAllPost);
router.route("/:id").get(getPost).delete(protect, deletePost);

export default router;
