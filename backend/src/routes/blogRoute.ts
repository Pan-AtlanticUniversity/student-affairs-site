import express from "express";
import { getBlog } from "../controller/blog.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get(authenticateTokenMiddleware, getBlog);

export default router;