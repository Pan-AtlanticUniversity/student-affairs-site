"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("../controller/blog.controller");
const authenticateTokenMiddleware_1 = __importDefault(require("../middleware/authenticateTokenMiddleware"));
const fileUploadMiddleware_1 = __importDefault(require("../middleware/fileUploadMiddleware"));
const router = express_1.default.Router();
router.route("/").get(blog_controller_1.getBlog);
router
    .route("/create")
    .post(authenticateTokenMiddleware_1.default, fileUploadMiddleware_1.default, blog_controller_1.createBlog);
router
    .route("/:_id")
    .get(authenticateTokenMiddleware_1.default, blog_controller_1.getBlogById)
    .put(authenticateTokenMiddleware_1.default, blog_controller_1.updateBlog)
    .delete(authenticateTokenMiddleware_1.default, blog_controller_1.deleteBlog);
exports.default = router;
