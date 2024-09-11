import express from "express";
import {
  getClub,
  createClub,
  updateClub,
  deleteClub,
  getClubById,
  migrateClubs,
} from "../controller/club.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";

const router = express.Router();

router
  .route("/")
  .get(getClub)
  .post(authenticateTokenMiddleware, uploadHandler, createClub);

router.route("/migrate").get(migrateClubs);

router
  .route("/:_id")
  .get(getClubById)
  .put(authenticateTokenMiddleware, updateClub)
  .delete(authenticateTokenMiddleware, deleteClub);

export default router;
