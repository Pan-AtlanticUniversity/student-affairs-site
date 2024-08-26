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
exports.forgotPassword = exports.validateToken = exports.login = exports.signup = void 0;
const model_1 = require("../model");
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const mail_1 = require("../services/mail");
const passfather_1 = __importDefault(require("passfather"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, email } = req.body;
        if (!fullname || !email)
            throw new errors_1.CustomAPIError("Provide all fields", http_status_codes_1.StatusCodes.BAD_REQUEST);
        const user = yield model_1.User.findOne({ email });
        if (user)
            throw new errors_1.CustomAPIError("User already exists", http_status_codes_1.StatusCodes.FORBIDDEN);
        const password = (0, passfather_1.default)();
        const createdUser = yield model_1.User.create(Object.assign(Object.assign({}, req.body), { password }));
        yield (0, mail_1.sendMail)(email, password);
        const token = createdUser.getToken();
        res.status(http_status_codes_1.StatusCodes.CREATED).json({
            message: "User created successfully",
            token,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.signup = signup;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield model_1.User.findOne({ email });
        const isMatch = yield (user === null || user === void 0 ? void 0 : user.comparePassword(password));
        if (!user || !isMatch)
            throw new errors_1.BadRequest("Invalid username or password");
        const token = user.getToken();
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Login successful",
            token,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
const validateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_codes_1.StatusCodes.OK).json({ valid: true, message: "Token is valid" });
});
exports.validateToken = validateToken;
const forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield model_1.User.findOne({ email });
        if (!user)
            throw new errors_1.BadRequest("User does not exist");
        const password = (0, passfather_1.default)();
        user.password = password;
        yield user.save();
        yield (0, mail_1.sendUpdateMail)(email, password);
        res
            .status(http_status_codes_1.StatusCodes.OK)
            .json({ message: "A new password has been sent to your mail" });
    }
    catch (err) {
        next(err);
    }
});
exports.forgotPassword = forgotPassword;
