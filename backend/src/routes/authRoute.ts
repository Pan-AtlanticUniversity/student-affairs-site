import express from "express";
import {
  forgotPassword,
  login,
  refreshSession,
  signup,
  validateAccessToken,
} from "../controller/user.controller";

const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(signup);

router.route("/refresh_session").get(refreshSession);

router.route("/validate_token").post(validateAccessToken);

router.route("/forgot_password").post(forgotPassword);

export default router;
