import { Request, Response } from "express";
import { Date } from "../model";
import { StatusCodes } from "http-status-codes";

export const getDate = async (req: Request, res: Response) => {

    const date = await Date.find();
    res.status(StatusCodes.OK).json(date);

};

export const createDate = async (req: Request, res: Response) => {
    const date = new Date(req.body);
    try {
        const newDate = await date.save();
        res.status(201).json(newDate);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateDate = async (req: Request, res: Response) => {
    try {
        const date = await Date.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!date) return res.status(404).json({ message: 'Date not found' });
        res.json(date);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteDate = async (req: Request, res: Response) => {
    try {
        const date = await Date.findByIdAndDelete(req.params._id);
        if (!date) return res.status(404).json({ message: 'Date not found' });
        res.json({ message: 'Date deleted' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// get Date by ID
export const getDateById = async (req: Request, res: Response) => {
    try {
        const date = await Date.findById(req.params._id);
        if (!date) return res.status(404).json({ message: 'Date not found' });
        res.status(StatusCodes.OK).json(date);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};