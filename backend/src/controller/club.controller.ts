import { Request, Response } from "express";
import { Club } from "../model";
import { StatusCodes } from "http-status-codes";
import fs from "fs";
import path from "path";

const getDefaultImageBase64 = () => {
  const defaultImagePath = "public/images/default-user.svg";
  const imageBuffer = fs.readFileSync(defaultImagePath);
  return `data:image/svg+xml;base64,${imageBuffer.toString("base64")}`;
};

//this gets all clubs
export const getClub = async (req: Request, res: Response) => {
  const club = await Club.find();
  res.status(StatusCodes.OK).json(club);
};

export const createClub = async (req: Request, res: Response) => {
  try {
    const {
      about,
      club_name,
      executives,
      member_count,
      social_media_handles,
      meeting_time,
      background,
    } = req.body;

    

    const executivesObject = JSON.parse(executives);
    const handles = social_media_handles ? JSON.parse(social_media_handles) : null;

    // Get all files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image || !files.images) {
      throw new Error("Missing image files in the request");
    }

    // Update executives object with the appropriate image
    const presidentPosts = executivesObject.map((obj: any, index: number) => {
      const image = files.images[index]
        ? `data:${files.images[index].mimetype};base64,${files.images[
            index
          ].buffer.toString("base64")}`
        : getDefaultImageBase64();
      return {
        ...obj,
        image,
      };
    });

    const newPost = new Club({
      club_name,
      image: {
        value: `data:${
          files.image[0].mimetype
        };base64,${files.image[0].buffer.toString("base64")}`,
        background,
      },
      about,
      member_count,
      handles,
      executives: presidentPosts,
      meeting_time: meeting_time ?? undefined,
    });

    await newPost.save();

    res.status(StatusCodes.OK).json({ message: "Club created successfully" });
  } catch (error: unknown) {
    // Narrow the error type
    if (error instanceof Error) {
      console.error("Error creating club: ", error.message);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to create club", error: error.message });
    } else {
      console.error("Unknown error: ", error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to create club due to unknown error" });
    }
  }
};

export const updateClub = async (req: Request, res: Response) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteClub = async (req: Request, res: Response) => {
  try {
    const club = await Club.findByIdAndDelete(req.params._id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// get club by ID
export const getClubById = async (req: Request, res: Response) => {
  try {
    const club = await Club.findById(req.params._id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.status(StatusCodes.OK).json(club);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
