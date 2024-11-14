import express from "express";
import {
  renewSubscription,
  subscribe,
  test,
  unsubscribe,
} from "../controller/notificatiion.controller";

const router = express.Router();

router.route("/subscribe").post(subscribe);
router.route("/unsubscribe").post(unsubscribe);
router.route("/renew-subscription").post(renewSubscription);
router.route("/test").get(test);

export default router;
