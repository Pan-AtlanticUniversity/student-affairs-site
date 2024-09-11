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
    const handles = social_media_handles
      ? JSON.parse(social_media_handles)
      : null;

    // Get all files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image || !files.images) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this club's images based on its name
    const clubDir = path.join(__dirname, "uploads", "clubs", club_name);
    fs.mkdirSync(clubDir, { recursive: true }); // Ensure the directory exists

    // Update executives object with the appropriate image
    const presidentPosts = executivesObject.map((obj: any, index: number) => {
      const image = files.images[index]
        ? path.join(clubDir, files.images[index].filename)
        : "/uploads/defaults/default-image.png"; // Fallback image path
      return {
        ...obj,
        image,
      };
    });

    // Save the main club image in the same folder
    const clubImagePath = path.join(clubDir, files.image[0].filename);

    const newPost = new Club({
      club_name,
      image: {
        value: clubImagePath, // Store the path of the image
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

// Utility function to save a base64 image to file system
const saveBase64Image = (
  base64Data: string,
  directory: string,
  filename: string
) => {
  // Extract MIME type
  const mimeType = base64Data.match(/^data:(.+);base64,/)?.[1] || "image/png";

  const extension = mimeType.split("/")[1].replace("svg+xml", "svg") || "png"; // Default to PNG if extension is not found

  // Decode base64 string
  const base64String = base64Data.split(";base64,").pop() || "";
  const buffer = Buffer.from(base64String, "base64");

  // Ensure the directory exists
  fs.mkdirSync(directory, { recursive: true });

  // Define file path
  const filePath = path.join(directory, `${filename}.${extension}`);

  // Save the file
  fs.writeFileSync(filePath, buffer);

  return { filePath, extension };
};
export const migrateClubs = async () => {
  try {
    const clubs = await Club.find();

    for (const club of clubs) {
      const clubDir = path.join(
        "uploads",
        "clubs",
        club.club_name.replace(/ /g, "-")
      );

      // Create directory if it doesn't exist
      if (!fs.existsSync(clubDir)) {
        fs.mkdirSync(clubDir, { recursive: true });
      }

      // Handle main image
      if (club.image?.value) {
        const filename = `club-image`;
        const { filePath, extension } = saveBase64Image(
          club.image.value,
          clubDir,
          filename
        );
        club.image.value = `https://student-affairs-site.onrender.com/uploads/clubs/${club.club_name.replace(
          / /g,
          "-"
        )}/${filename}.${extension}`;

        // Verify file existence and permissions
        if (!fs.existsSync(filePath)) {
          console.warn(`File not created: ${filePath}`);
        } else {
          const stats = fs.statSync(filePath);
        }
      }

      // Handle executives' images
      if (club.executives) {
        for (const executive of club.executives) {
          if (executive.image) {
            const filename = `executive-${executive.full_name?.replace(
              / /g,
              "-"
            )}`;
            const { filePath, extension } = saveBase64Image(
              executive.image,
              clubDir,
              filename
            );
            executive.image = `https://student-affairs-site.onrender.com/uploads/clubs/${club.club_name.replace(
              / /g,
              "-"
            )}/${filename}.${extension}`;

            // Verify file existence and permissions
            if (!fs.existsSync(filePath)) {
              console.warn(`File not created: ${filePath}`);
            } else {
              const stats = fs.statSync(filePath);
            }
          }
        }
      }

      // Save updated club with file paths
      await Club.findByIdAndUpdate(club._id, club, { new: true });
    }
  } catch (error) {
    console.trace();
  }
};
