import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { BadRequest } from "../errors";
import { StatusCodes } from "http-status-codes";

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Error: Images Only!"));
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
});

const uploadHandler = (req: Request, res: Response, next: NextFunction) => {
  upload.single("image")(req, res, (err: any) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: err.message });
      } else {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: err.message });
      }
    }
    next();
  });
};

export default uploadHandler;
