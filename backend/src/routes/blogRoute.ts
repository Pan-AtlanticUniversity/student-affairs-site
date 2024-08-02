import express from "express";
import { getBlog, createBlog, updateBlog, deleteBlog ,getBlogById} from "../controller/blog.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get( getBlog)
                 .post(createBlog);

router.route('/:_id')
                 .get( getBlogById)
                 .put( updateBlog)
                 .delete(deleteBlog);

//                  router.route("/").get(authenticateTokenMiddleware, getBlog)
//                  .post(authenticateTokenMiddleware,createBlog);

// router.route('/:_id')
//                  .get(authenticateTokenMiddleware, getBlogById)
//                  .put(authenticateTokenMiddleware, updateBlog)
//                  .delete(authenticateTokenMiddleware,deleteBlog);

                //  so now the route facilitates get put post and delete
export default router;


