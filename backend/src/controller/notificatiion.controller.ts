import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import webpush from "web-push";

export const subscribe = async (req: Request, res: Response) => {
  const subscription = req.body;

  const payload = JSON.stringify({
    title: "Hello!",
    body: "It works.",
  });

  console.log("did it work?");

  console.log(subscription);

  webpush
    .sendNotification(subscription, payload)
    .then((result) => console.log("this is hre", result))
    .catch((e) => console.log("an error occured", e.stack));

  res.status(StatusCodes.OK).json({ success: true });
};

export const test = async (req: Request, res: Response) => {
  const payload = JSON.stringify({
    title: "Hello!",
    body: "It works.",
  });

  const subscription = {
    endpoint:
      "https://wns2-par02p.notify.windows.com/w/?token=BQYAAABQeQozEWH%2bfwm95vDKObFdPvsgV9t982knGvdO8VuZVGDrRFxDMSuVGOsl%2bp8OL68uQ7uYaHaicllZTmGzw3hV06QjA129Eh%2fc5qoRS0iEwKob5tZ0m0RUYARZ9Syat8TkPYdgnZ7Dac8hsTXaYfr4l%2brj34ltX51uqchF9hAAhoRNAbpmI4%2bYIsHvENyLfujnrR0spJM3W7PrKDOQkXmtnUzES4WE9iOum5coPllMRRm%2fdlxF9I9MK47wJMjMOOlBCLBtE0%2fA0unrzhzVgEdi%2fTwVgmDaYwP%2fvlunhMqGwefRLN3gbpAzBBgGaPM%2flq8%3d",
    expirationTime: null,
    keys: {
      p256dh:
        "BDahUZX9yfmnsmZ0kbIvu_4LAfW8rBYmefa4ZO-8zP3s4VNUDRTItxtgSkLJ7XvZ9k0j9rg37E6xqDwsfvSIyfQ",
      auth: "M4elgt8Wbk5Q4YXo7yDFwg",
    },
  };

  webpush
    .sendNotification(subscription, payload)
    .then((result) => console.log("this is hre", result))
    .catch((e) => console.log("an error occured", e.stack));

  res.status(StatusCodes.OK).json({ success: true });
};
