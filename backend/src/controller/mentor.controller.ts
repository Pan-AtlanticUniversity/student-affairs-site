import { Request, Response } from "express";
import { Mentor } from "../model";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import path from "path";

//this gets all availablementors
export const getMentors = async (req: Request, res: Response) => {
  const mentor = await Mentor.find();
  res.status(StatusCodes.OK).json(mentor);
};

export const addMentor = async (req: Request, res: Response) => {
  try {
    const { post, name, email, phone } = req.body;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this mentor's images based on its name
    const mentorImageDir = path.join(__dirname, "uploads", "mentor", name);
    //fs.mkdirSync(memberImageDir, { recursive: true }); // Ensure the directory exists

    // Save the member image in the same folder
    const mentorImagePath = path.join(mentorImageDir, files.image[0]?.filename);

    const newPost = new Mentor({
      name,
      image: mentorImagePath,
      email,
      phone,
      post,
    });

    await newPost.save();

    res.status(StatusCodes.OK).json({ message: "Mentor added successfully" });
  } catch (error: unknown) {
    // Narrow the error type
    if (error instanceof Error) {
      console.error("Error adding mentor: ", error.message);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add mentor", error: error.message });
    } else {
      console.error("Unknown error: ", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add mentor due to unknown error" });
    }
  }
};
