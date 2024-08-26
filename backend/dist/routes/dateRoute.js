"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const date_controller_1 = require("../controller/date.controller");
const router = express_1.default.Router();
router.route("/").get(date_controller_1.getDate)
    .post(date_controller_1.createDate);
router.route('/:_id')
    .get(date_controller_1.getDateById)
    .put(date_controller_1.updateDate)
    .delete(date_controller_1.deleteDate);
exports.default = router;
