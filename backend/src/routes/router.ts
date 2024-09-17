import express from "express";
import authRoute from "./authRoute";
import clubRoute from "./clubRoute";
import blogRoute from "./blogRoute";
import dateRoute from "./dateRoute";
import memberRoute from "./memberRoute";
//could have added books

const router = express.Router();

router.use("/auth", authRoute);
router.use("/club", clubRoute);
router.use("/member", memberRoute);
router.use("/blog", blogRoute);
router.use("/date", dateRoute);

export default router;
