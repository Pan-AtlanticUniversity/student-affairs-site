import express from "express";
import {
  getClub,
  createClub,
  updateClub,
  deleteClub,
  getClubById,
  syncMembers,
} from "../controller/club.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";

const router = express.Router();

router
  .route("/")
  .get(getClub)
  .post(authenticateTokenMiddleware, uploadHandler, createClub);

router.route("/sync").post(uploadHandler, syncMembers);

router
  .route("/:_id")
  .get(getClubById)
  .put(authenticateTokenMiddleware, updateClub)
  .delete(authenticateTokenMiddleware, deleteClub);

export default router;
