import express from "express";
import { getDate, createDate, updateDate, deleteDate, getDateById} from "../controller/date.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get( getDate)
                 .post(createDate);

router.route('/:_id')
                 .get( getDateById)
                 .put( updateDate)
                 .delete(deleteDate);

export default router;