import express from "express";
import { getClub } from "../controller/club.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get(authenticateTokenMiddleware, getClub);

export default router;