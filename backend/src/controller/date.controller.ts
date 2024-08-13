import { Request, Response } from "express";
import { Date } from "../model";
import { StatusCodes } from "http-status-codes";

export const getDate = async (req: Request, res: Response) => {

    const date = await Date.find();
    res.status(StatusCodes.OK).json(date);

};