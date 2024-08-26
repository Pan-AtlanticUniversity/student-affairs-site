"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const transporter_1 = __importDefault(require("./transporter"));
const sendMail = (recipientMail, accessPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield transporter_1.default.sendMail({
        from: '"NoReply Student Affairs" <noreply@gmail.com>',
        to: recipientMail,
        subject: "Email verification",
        text: `Hello there 👋😊\nYour registration process is complete\nRegistered mail: ${recipientMail}\nAccess password: ${accessPassword}`,
        html: `
      <body style="text-align: center; display: flex; flex-direction: column; align-items: center; height: 100vh; gap: 5px">
        <h1>Email verification</h1>
        <h3>Hello there 👋😊,<br/>You registration process is complete,</h3>
        <br style="margin-bottom: 5px"/>
        <p style="color: #3081ed; font-size: 32px">Your access password: ${accessPassword}</p>
        <p style="margin-bottom:10px">Your email: ${recipientMail}</p>
        <p>If you did not request this, please ignore this email</p>
      </body>
    `,
    }).then((info) => {
        console.log('Message sent successfully');
    }).catch((err) => {
        throw new errors_1.BadRequest(err.message);
    });
    return response;
});
exports.default = sendMail;
