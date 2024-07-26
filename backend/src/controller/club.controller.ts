import { Request, Response } from "express";
import { Club } from "../model";
import { StatusCodes } from "http-status-codes";

export const getClub = async (req: Request, res: Response) => {

    const club = await Club.find();
    res.status(StatusCodes.OK).json(club);

};