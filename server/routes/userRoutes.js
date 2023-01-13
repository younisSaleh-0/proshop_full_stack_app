import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.put("/", protect, updateUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
