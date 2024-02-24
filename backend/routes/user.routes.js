import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSiderBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSiderBar);

export default router;
