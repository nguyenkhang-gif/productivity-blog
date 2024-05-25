import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getSection } from "../controllers/pomodoro.controller.js";
const router = express.Router();

router.get("/", protectRoute, getSection);

export default router;
