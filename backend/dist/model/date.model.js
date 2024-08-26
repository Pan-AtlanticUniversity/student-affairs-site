"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dateSchema = new mongoose_1.default.Schema({
    date: String,
    event: String,
});
const Date = mongoose_1.default.model("Date", dateSchema);
exports.default = Date;
