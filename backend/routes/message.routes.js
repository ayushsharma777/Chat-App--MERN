import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
//authorization - protectRoute - act as a middleware, only allow access if logged in

export default router;
