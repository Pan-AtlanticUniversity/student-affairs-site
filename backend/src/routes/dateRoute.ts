import express, { NextFunction, Response, Request } from "express";
import {
  getDate,
  createDate,
  updateDate,
  deleteDate,
  getDateById,
} from "../controller/date.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";
import multer from "multer";

const router = express.Router();

const parseFormData = (req: Request, res: Response, next: NextFunction) => {
  multer().none()(req, res, () => {
    next();
  });
};

router.route("/").get(getDate).patch(uploadHandler, createDate);

router
  .route("/:_id")
  .get(getDateById)
  .put(uploadHandler, updateDate)
  .delete(deleteDate);

export default router;
