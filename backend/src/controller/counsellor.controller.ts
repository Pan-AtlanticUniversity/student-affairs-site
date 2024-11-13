import { Request, Response } from "express";
import { Counsellor } from "../model";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import path from "path";

//this gets all availablementors
export const getCounsellor = async (req: Request, res: Response) => {
  const counsellor = await Counsellor.find();
  res.status(StatusCodes.OK).json(counsellor);
};

export const addCounsellor = async (req: Request, res: Response) => {
  try {
    const { post, name, email, phone } = req.body;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this mentor's images based on its name
    const counsellorImageDir = path.join(__dirname, "uploads", "counsellor", name);
    //fs.mkdirSync(memberImageDir, { recursive: true }); // Ensure the directory exists

    // Save the member image in the same folder
    const counsellorImagePath = path.join(counsellorImageDir, files.image[0]?.filename);

    const newPost = new Counsellor({
      name,
      image: counsellorImagePath,
      email,
    //   phone,
    //   post,
    });

    await newPost.save();

    res.status(StatusCodes.OK).json({ message: "Counsellor added successfully" });
  } catch (error: unknown) {
    // Narrow the error type
    if (error instanceof Error) {
      console.error("Error adding counsellor: ", error.message);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add counsellor", error: error.message });
    } else {
      console.error("Unknown error: ", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add counsellor due to unknown error" });
    }
  }
};
