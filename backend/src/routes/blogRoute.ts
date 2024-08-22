import express from "express";
import {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} from "../controller/blog.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";
import uploadHandler from "../middleware/fileUploadMiddleware";

const router = express.Router();

router.route("/").get(getBlog);

router
  .route("/create")
  .post(authenticateTokenMiddleware, uploadHandler, createBlog);

router
  .route("/:_id")
  .get(authenticateTokenMiddleware, getBlogById)
  .put(authenticateTokenMiddleware, updateBlog)
  .delete(authenticateTokenMiddleware, deleteBlog);

export default router;
