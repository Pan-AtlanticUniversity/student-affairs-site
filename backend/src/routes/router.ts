import express from "express";
import authRoute from "./authRoute";
import clubRoute from "./clubRoute";
import blogRoute from "./blogRoute";
import dateRoute from "./dateRoute";
import memberRoute from "./memberRoute";
import serviceRoute from "./serviceRoute";
import notificationsRoute from "./notifications";
import mentorRoute from "./mentorRoute";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/club", clubRoute);
router.use("/member", memberRoute);
router.use("/blog", blogRoute);
router.use("/date", dateRoute);
router.use("/services", serviceRoute);
router.use("/notifications", notificationsRoute);
router.use("/mentor", mentorRoute);

export default router;
