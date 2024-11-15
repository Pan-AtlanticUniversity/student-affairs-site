import express from "express";
import authRoute from "./authRoute";
import clubRoute from "./clubRoute";
import blogRoute from "./blogRoute";
import dateRoute from "./dateRoute";
import memberRoute from "./memberRoute";
import serviceRoute from "./serviceRoute";
import notificationsRoute from "./notifications";
import mentorRoute from "./mentorRoute";
import counsellorRoute from "./counsellorRoute";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/club", clubRoute);
router.use("/member", memberRoute);
router.use("/blog", blogRoute);
router.use("/date", dateRoute);
router.use("/services", serviceRoute);
router.use("/notifications", notificationsRoute);
router.use("/mentor", mentorRoute);
router.use("/counsellor", counsellorRoute);

export default router;
