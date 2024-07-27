import { Request, Response } from "express";
import { Blog } from "../model";
import { StatusCodes } from "http-status-codes";

export const getBlog = async (req: Request, res: Response) => {

    const blog = await Blog.find();
    res.status(StatusCodes.OK).json(blog);

};