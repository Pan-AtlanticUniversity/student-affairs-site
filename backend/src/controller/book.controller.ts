import { Request, Response } from "express";
import { Book } from "../model";
import { StatusCodes } from "http-status-codes";

export const getBook = async (req: Request, res: Response) => {

    const book = await Book.find();
    res.status(StatusCodes.OK).json(book);

};