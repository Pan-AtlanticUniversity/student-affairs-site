import express from "express";
import { getBook } from "../controller/book.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get(authenticateTokenMiddleware, getBook);

export default router;