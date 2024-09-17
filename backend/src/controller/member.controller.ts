import { Request, Response } from "express";
import { Member } from "../model";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import path from "path";

//this gets all student affairs members
export const getMembers = async (req: Request, res: Response) => {
  const member = await Member.find();
  res.status(StatusCodes.OK).json(member);
};

export const addMember = async (req: Request, res: Response) => {
  try {
    const { post, name, email, phone } = req.body;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this member's images based on its name
    const memberImageDir = path.join(__dirname, "uploads", "member", name);
    //fs.mkdirSync(memberImageDir, { recursive: true }); // Ensure the directory exists

    // Save the member image in the same folder
    const memberImagePath = path.join(memberImageDir, files.image[0]?.filename);

    const newPost = new Member({
      name,
      image: memberImagePath,
      email,
      phone,
      post,
    });

    await newPost.save();

    res.status(StatusCodes.OK).json({ message: "Member added successfully" });
  } catch (error: unknown) {
    // Narrow the error type
    if (error instanceof Error) {
      console.error("Error adding member: ", error.message);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add member", error: error.message });
    } else {
      console.error("Unknown error: ", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to add member due to unknown error" });
    }
  }
};
