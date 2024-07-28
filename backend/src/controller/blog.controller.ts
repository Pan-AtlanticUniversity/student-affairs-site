import { Request, Response } from "express";
import { Blog } from "../model";
import { StatusCodes } from "http-status-codes";

export const getBlog = async (req: Request, res: Response) => {

    const blog = await Blog.find();
    res.status(StatusCodes.OK).json(blog);

};

export const createBlog = async (req: Request, res: Response) => {
    const blog = new Blog(req.body);
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateBlog = async (req: Request, res: Response) => {
    try {
                                                            //backslash because id in the db is _id
        const blog = await Blog.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteBlog = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params._id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted' });
    } catch (error) {
       res.status(500).json({ message: (error as Error).message });
    }
};