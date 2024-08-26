"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoute_1 = __importDefault(require("./authRoute"));
const clubRoute_1 = __importDefault(require("./clubRoute"));
const blogRoute_1 = __importDefault(require("./blogRoute"));
const dateRoute_1 = __importDefault(require("./dateRoute"));
//could have added books
const router = express_1.default.Router();
router.use('/auth', authRoute_1.default);
router.use('/club', clubRoute_1.default);
router.use('/blog', blogRoute_1.default);
router.use('/date', dateRoute_1.default);
exports.default = router;
