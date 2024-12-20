import { Request, Response } from "express";
import { Event } from "../model";
import { StatusCodes } from "http-status-codes";

import path from "path";
import fs from "fs";

export const getDate = async (req: Request, res: Response) => {
  const date = await Event.find();
  res.status(StatusCodes.OK).json(date);
};

export const createDate = async (req: Request, res: Response) => {
  try {
    const { event_date, content, name } = req.body;

    console.log(event_date, content, name);
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Ensure the necessary files exist
    if (!files || !files.image) {
      throw new Error("Missing image files in the request");
    }

    // Define a directory for this club's images based on its name
    const eventDir = path.join("./uploads", "events", name).replace(/ /g, "-");
    fs.mkdirSync(eventDir, { recursive: true }); // Ensure the directory exists

    // Save the main club image in the same folder
    const eventImagePath = path.join(
      eventDir,
      files.image[0].filename.replace(/ /g, "-")
    );

    const newEvent = new Event({
      name,
      image: `${
        process.env.BACKEND_ROUTE as unknown as string
      }/${eventImagePath.replace(/\\/g, "/")}`,
      content,
      date: event_date,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
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

export const updateDate = async (req: Request, res: Response) => {
  try {
    const { event_date, content, name } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Fetch the existing event by ID
    const eventId = req.params._id;
    const existingEvent = await Event.findById(eventId);
    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the request contains a new image
    let updatedImagePath = existingEvent.image; // Default to existing image
    if (files && files.image && files.image.length > 0) {
      // Define the new image directory and filename
      const eventDir = path
        .join("./uploads", "events", name || existingEvent.name)
        .replace(/ /g, "-");
      fs.mkdirSync(eventDir, { recursive: true }); // Ensure directory exists

      updatedImagePath = path.join(
        eventDir,
        files.image[0].filename.replace(/ /g, "-")
      );

      // Replace backslashes with forward slashes
      updatedImagePath = `${
        process.env.BACKEND_ROUTE
      }/${updatedImagePath.replace(/\\/g, "/")}`;
    }

    // Update fields with new or existing values
    existingEvent.name = name || existingEvent.name;
    existingEvent.content = content || existingEvent.content;
    existingEvent.date = event_date || existingEvent.date;
    existingEvent.image = updatedImagePath;

    // Save the updated event
    const updatedEvent = await existingEvent.save();

    res.status(StatusCodes.OK).json(updatedEvent);
  } catch (error) {
    console.error("Error updating event: ", (error as Error).message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to update event",
      error: (error as Error).message,
    });
  }
};

export const deleteDate = async (req: Request, res: Response) => {
  try {
    const eventId = req.params._id;

    // Fetch the existing event to get its image path
    const existingEvent = await Event.findById(eventId);
    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    console.log(existingEvent.image);

    // Remove the image file from the filesystem if it exists
    if (existingEvent.image) {
      const imagePath = path.join(
        __dirname,
        "..",
        "..",
        existingEvent.image.replace(process.env.BACKEND_ROUTE || "", ""),
        ".."
      );

      console.log(imagePath);

      if (fs.existsSync(imagePath)) {
        fs.rmSync(imagePath, { recursive: true, force: true });
        console.log(`Deleted image file: ${imagePath}`);
      }
    }

    // Delete the event from the database
    await Event.findByIdAndDelete(eventId);

    res
      .status(StatusCodes.OK)
      .json({ message: "Event deleted successfully", deletedEventId: eventId });
  } catch (error) {
    console.error("Error deleting event: ", (error as Error).message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Failed to delete event",
      error: (error as Error).message,
    });
  }
};

// get Date by ID
export const getDateById = async (req: Request, res: Response) => {
  try {
    const date = await Event.findById(req.params._id);
    if (!date) return res.status(404).json({ message: "Date not found" });
    res.status(StatusCodes.OK).json(date);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
