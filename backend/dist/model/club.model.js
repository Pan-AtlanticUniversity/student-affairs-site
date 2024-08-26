"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clubSchema = new mongoose_1.default.Schema({
    club_name: String,
    image: String,
    about: String,
    member_count: { type: Number, default: 0 },
    meeting_time: { type: Date, default: Date.now },
    social_media_handles: [
        {
            handle: String,
            url: String,
        },
    ],
    executives: [
        {
            full_name: String,
            image: String,
            post: String,
        },
    ],
});
const Club = mongoose_1.default.model("Club", clubSchema);
exports.default = Club;
