import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  loginUser,
  registerUser,
  logoutUser,
  getProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getProfile);

export default router;
