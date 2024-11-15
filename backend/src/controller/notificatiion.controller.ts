import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PushSubscription } from "web-push";
import { SubscriptionModel } from "../model";
import sendNotification from "../services/notification/sendNotification";

export const subscribe = async (req: Request, res: Response) => {
  const subscription: PushSubscription = req.body;

  try {
    // Store the subscription in the database
    await SubscriptionModel.create(subscription);

    await sendNotification(subscription, {
      title: "Hello from student affairs",
      body: "Subscription successful.",
      tag: "New subscription",
    });

    res.status(StatusCodes.OK).json({ success: true });
  } catch (error) {
    console.log("Error sending notification:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false });
  }
};

export const unsubscribe = async (req: Request, res: Response) => {
  const { endpoint } = req.body;
  try {
    const subscription = await SubscriptionModel.findOneAndDelete({ endpoint });
    if (!subscription)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Blog not found" });
    res.json({ message: "Unsubscribed from notifications" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: (error as Error).message });
  }
};

export const renewSubscription = async (req: Request, res: Response) => {
  try {
    const subscription = req.body; // Get the updated subscription data from the request

    // Store or update the subscription in your database
    const existingSubscription = await SubscriptionModel.findOneAndUpdate(
      { endpoint: subscription.endpoint },
      subscription, // Update with the new subscription details
      { new: true, upsert: true } // Ensure it creates a new one if it doesn't exist
    );

    res
      .status(StatusCodes.OK)
      .json({ message: "Subscription renewes successfully" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Server error" });
  }
};

export const test = async (req: Request, res: Response) => {
  const subscriptions = await SubscriptionModel.find();

  subscriptions.forEach(async (subscription) => {
    await sendNotification(subscription, {
      title: "Hello!",
      body: "It works.",
    })
      .then((result) => console.log("this is hre", result))
      .catch((e) => console.log("an error occured", e.stack));
  });

  res.status(StatusCodes.OK).json({ success: true });
};
