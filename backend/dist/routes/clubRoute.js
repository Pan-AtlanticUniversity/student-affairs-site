"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const club_controller_1 = require("../controller/club.controller");
const authenticateTokenMiddleware_1 = __importDefault(require("../middleware/authenticateTokenMiddleware"));
const router = express_1.default.Router();
router
    .route("/")
    .get(authenticateTokenMiddleware_1.default, club_controller_1.getClub)
    .post(authenticateTokenMiddleware_1.default, club_controller_1.createClub);
router
    .route("/:_id")
    .get(authenticateTokenMiddleware_1.default, club_controller_1.getClubById)
    .put(authenticateTokenMiddleware_1.default, club_controller_1.updateClub)
    .delete(authenticateTokenMiddleware_1.default, club_controller_1.deleteClub);
exports.default = router;
