import express from "express";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";
import { addMentor, getMentors } from "../controller/mentor.controller";

const router = express.Router();

router
  .route("/")
  .get(getMentors)
  .post(authenticateTokenMiddleware, uploadHandler, addMentor);

export default router;
