"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.MAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
    debug: true,
});
exports.default = transporter;
