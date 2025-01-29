import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { notFound, errorHandlerMiddleware } from "./middleware";
import router from "./routes/router";
import connectDB from "./db/connection";
import path from "path";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
const corsOptions = {
  origin: true,
  credentials: true, // Allows cookies to be sent with the request
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Ensure OPTIONS is allowed
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204, // Some legacy browsers might need this (204 is the "no content" status)
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname,'..','..','UI' ,"dist")));





app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"), {
    maxAge: "1d", // Cache for 1 day
  })
);

// app.get("/", (req, res) => {
//   res.send({ message: "Hello API" });
// });

app.use("/api/v1/", router); //get's the route declared above

app.use(notFound);

app.use(errorHandlerMiddleware);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("[ ready ] database connected");
    app.listen(port, "0.0.0.0", () => {
      console.log("backend currently running");
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
