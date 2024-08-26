"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("../controller/book.controller");
const authenticateTokenMiddleware_1 = __importDefault(require("../middleware/authenticateTokenMiddleware"));
const router = express_1.default.Router();
router.route("/").get(authenticateTokenMiddleware_1.default, book_controller_1.getBook);
exports.default = router;
