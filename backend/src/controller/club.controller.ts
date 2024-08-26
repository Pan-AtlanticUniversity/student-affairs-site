import { Request, Response } from "express";
import { Club } from "../model";
import { StatusCodes } from "http-status-codes";

//this gets all clubs
export const getClub = async (req: Request, res: Response) => {

    const club = await Club.find();
    res.status(StatusCodes.OK).json(club);

};

export const createClub = async (req: Request, res: Response) => {
    const club = new Club(req.body);
    try {
        const newClub = await club.save();
        res.status(201).json(newClub);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateClub = async (req: Request, res: Response) => {
    try {
        const club = await Club.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!club) return res.status(404).json({ message: 'Club not found' });
        res.json(club);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteClub = async (req: Request, res: Response) => {
    try {
        const club = await Club.findByIdAndDelete(req.params._id);
        if (!club) return res.status(404).json({ message: 'Club not found' });
        res.json({ message: 'Club deleted' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// get club by ID
export const getClubById = async (req: Request, res: Response) => {
    try {
        const club = await Club.findById(req.params._id);
        if (!club) return res.status(404).json({ message: 'Club not found' });
        res.status(StatusCodes.OK).json(club);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};