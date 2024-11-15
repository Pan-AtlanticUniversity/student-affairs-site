import { Request, Response } from "express";
import { Blog, SubscriptionModel } from "../model";
import { StatusCodes } from "http-status-codes";
import path from "path";
import fs from "fs";
import sendNotification from "../services/notification/sendNotification";

export const getBlog = async (req: Request, res: Response) => {
  const blog = await Blog.find();
  res.status(StatusCodes.OK).json(blog);
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { name, content, author } = req.body;

    // Get all files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this club's images based on its name
    const blogDir = path.join("./uploads", "blogs", name).replace(/ /g, "-");
    fs.mkdirSync(blogDir, { recursive: true }); // Ensure the directory exists

    // Save the main club image in the same folder
    const clubImagePath = path.join(
      blogDir,
      files.image[0].filename.replace(/ /g, "-")
    );

    const newPost = new Blog({
      name,
      image: `${
        process.env.BACKEND_ROUTE as unknown as string
      }/${clubImagePath.replace(/\\/g, "/")}`,
      content,
      author,
    });

    await newPost.save();

    const subscriptions = await SubscriptionModel.find();

    subscriptions.forEach(async (subscription) => {
      await sendNotification(subscription, {
        title: "A New blog just dropped",
        body: newPost.name || "New blog",
        tag: "News",
      })
        .then((_result) => console.log("Blog sent"))
        .catch((e) => console.log("an error occured", e.stack));
    });

    res.status(StatusCodes.OK).json({ message: "Blog created successfully" });
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

export const updateBlog = async (req: Request, res: Response) => {
  const { name, content, author, image } = req.body;
  let clubImagePath = "";

  if (!image) {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    // Define a directory for this club's images based on its name
    const blogDir = path.join("./uploads", "blogs", name).replace(/ /g, "-");
    fs.mkdirSync(blogDir, { recursive: true }); // Ensure the directory exists

    // Save the main club image in the same folder
    clubImagePath = path.join(
      blogDir,
      files.image[0].filename.replace(/ /g, "-")
    );

    clubImagePath = `${
      process.env.BACKEND_ROUTE as unknown as string
    }/${clubImagePath.replace(/\\/g, "/")}`;
  } else {
    clubImagePath = image;
  }

  try {
    //backslash because id in the db is _id
    const blog = await Blog.findByIdAndUpdate(
      req.params._id,
      {
        name,
        content,
        author,
        image: clubImagePath,
      },
      {
        new: true,
      }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog updated successfully" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    console.log("here");
    const blog = await Blog.findByIdAndDelete(req.params._id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// get blog by ID
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params._id);
    if (!blog) return res.status(404).json({ message: "blog not found" });
    res.status(StatusCodes.OK).json(blog);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
