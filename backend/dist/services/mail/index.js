"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.sendUpdateMail = void 0;
const sendUpdateMail_1 = __importDefault(require("./sendUpdateMail"));
exports.sendUpdateMail = sendUpdateMail_1.default;
const sendMail_1 = __importDefault(require("./sendMail"));
exports.sendMail = sendMail_1.default;
