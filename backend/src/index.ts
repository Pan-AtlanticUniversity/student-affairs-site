import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { notFound, errorHandlerMiddleware } from "./middleware";
import router from "./routes/router";
import connectDB from "./db/connection";
import path from "path";
import webpush from "web-push";
dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "../public")));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"), {
    maxAge: "1d", // Cache for 1 day
  })
);

webpush.setVapidDetails(
  process.env.WEB_PUSH_CONTACT as unknown as string,
  process.env.PUBLIC_VAPID_KEY as unknown as string,
  process.env.PRIVATE_VAPID_KEY as unknown as string
);

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

app.use("/api/v1/", router); //get's the route declared above

app.use(notFound);

app.use(errorHandlerMiddleware);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("[ ready ] database connected");
    app.listen(port, () => {
      console.log("backend currently running");
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
