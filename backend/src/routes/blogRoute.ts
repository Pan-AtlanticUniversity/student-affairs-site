import express from "express";
import {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} from "../controller/blog.controller";
import multer from "multer";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.route("/").get(getBlog);

router
  .route("/create")
  .post(authenticateTokenMiddleware, upload.single("image"), createBlog);

router
  .route("/:_id")
  .get(authenticateTokenMiddleware, getBlogById)
  .put(authenticateTokenMiddleware, updateBlog)
  .delete(authenticateTokenMiddleware, deleteBlog);

export default router;
