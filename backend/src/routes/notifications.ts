import express from "express";
import { subscribe, test } from "../controller/notificatiion.controller";

const router = express.Router();

router.route("/subscribe").post(subscribe);

router.route("/test").get(test);

export default router;
