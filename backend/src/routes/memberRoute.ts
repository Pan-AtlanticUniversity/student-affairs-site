import express from "express";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";
import { addMember, getMembers } from "../controller/member.controller";

const router = express.Router();

router
  .route("/")
  .get(getMembers)
  .post(authenticateTokenMiddleware, uploadHandler, addMember);

export default router;
