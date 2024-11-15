import { PushSubscription } from "web-push";
import webpush from "./config";

const sendNotification = async (
  subscription: PushSubscription,
  payload: Record<string, string>
) => {
  const stringifiedPayload = JSON.stringify(payload);

  return await webpush.sendNotification(subscription, stringifiedPayload);
};

export default sendNotification;

/*
{
    title: "Hello from student affairs",
    body: "Subscription successful.",
    tag: "New subscription",
  }

  */
