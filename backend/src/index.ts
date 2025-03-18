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

// ✅ Serve API routes FIRST
app.use("/api/v1/", router);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files LAST (after all API routes)
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"), {
    maxAge: "1d", // Cache for 1 day
  })
);

const corsOptions = {
  origin: ["https://studentaffairs.pau.edu.ng"],
  credentials: true, // Allows cookies
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204, 
  preflightContinue: false, // Ensure preflight requests are handled properly
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests globally

// ✅ Move this AFTER all API and static routes
app.use(express.static(path.join(__dirname, "..", "..", "UI", "dist")));

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
