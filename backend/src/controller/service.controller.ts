import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { Service } from "../model";

export const getServices = async (req: Request, res: Response) => {
  const services = await Service.find();
  res.status(StatusCodes.OK).json(services);
};
