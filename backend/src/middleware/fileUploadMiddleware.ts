import { NextFunction, Request, Response } from "express";
import multer from "multer";
import { StatusCodes } from "http-status-codes";

import fs from "fs";
import path from "path";

// File filter to allow only images
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

// Configure Multer to use disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Dynamically decide the folder based on request data
    const clubName = req.body.club_name; // or any logic to decide folder
    const clubDir = path.join("uploads", "clubs", clubName);

    // Ensure the directory exists
    fs.mkdirSync(clubDir, { recursive: true });

    // Set the directory to save the file
    cb(null, clubDir);
  },
  filename: (req, file, cb) => {
    // Create a unique file name
    const uniqueSuffix = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix); // Save with unique filename
  },
});

// Apply the storage and file filter to multer
const upload = multer({
  storage,
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
