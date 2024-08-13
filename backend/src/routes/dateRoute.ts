import express from "express";
import { getDate } from "../controller/date.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get(getDate);

export default router;