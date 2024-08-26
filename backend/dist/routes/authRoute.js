"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const authenticateTokenMiddleware_1 = __importDefault(require("../middleware/authenticateTokenMiddleware"));
const router = express_1.default.Router();
router.route("/login").post(user_controller_1.login);
router.route("/register").post(user_controller_1.signup);
router.route("/validate_token").get(authenticateTokenMiddleware_1.default, user_controller_1.validateToken);
router.route("/forgot_password").post(user_controller_1.forgotPassword);
exports.default = router;
