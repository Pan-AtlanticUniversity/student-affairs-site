import express from "express";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";
import { addCounsellor, getCounsellor } from "../controller/counsellor.controller";

const router = express.Router();

router
  .route("/")
  .get(getCounsellor)
  .post(authenticateTokenMiddleware, uploadHandler, addCounsellor);

export default router;
