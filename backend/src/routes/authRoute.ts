import express from "express";
import {
  forgotPassword,
  login,
  signup,
  validateToken,
} from "../controller/user.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(signup);

router.route("/validate_token").get(authenticateTokenMiddleware, validateToken);

router.route("/forgot_password").post(forgotPassword);

export default router;
