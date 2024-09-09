import { NextFunction, Request, Response } from "express";
import multer from "multer";
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
  const uploadFields = upload.fields([
    { name: "image", maxCount: 1 }, // Single club image
    { name: "images", maxCount: 15 }, // Multiple images (up to 15) for other purposes
  ]);

  uploadFields(req, res, (err: any) => {
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
