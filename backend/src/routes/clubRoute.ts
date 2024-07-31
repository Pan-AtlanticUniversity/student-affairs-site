import express from "express";
import { getClub , createClub, updateClub, deleteClub, getClubById} from "../controller/club.controller";
import authenticateTokenMiddleware from "../middleware/authenticateTokenMiddleware";

const router = express.Router();

router.route("/").get(authenticateTokenMiddleware, getClub)
                 .post(authenticateTokenMiddleware, createClub);

router.route('/:_id')
                .get(authenticateTokenMiddleware, getClubById)
                .put(authenticateTokenMiddleware, updateClub)
                .delete(authenticateTokenMiddleware, deleteClub);


export default router;