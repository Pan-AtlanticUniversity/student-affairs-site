import { Request, Response } from "express";
import { Blog } from "../model";
import { StatusCodes } from "http-status-codes";

export const getBlog = async (req: Request, res: Response) => {
  const blog = await Blog.find();
  res.status(StatusCodes.OK).json(blog);
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    let imageBase64 = req.file?.buffer.toString("base64") ?? "";

    const newPost = new Blog({
      title,
      content,
      image: imageBase64,
      fileType: req.file?.mimetype.split("/")[1],
    });

    await newPost.save();

    res
      .status(StatusCodes.OK)
      .json({ message: "Blog post created successfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to create blog post", error });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    //backslash because id in the db is _id
    const blog = await Blog.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
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
