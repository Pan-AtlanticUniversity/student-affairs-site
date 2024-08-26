"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../errors");
const authenticateTokenMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer '))
        throw new errors_1.BadRequest('No access token provided');
    token = token.split(' ')[1];
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_SECRET, (err, payload) => {
        if (err)
            throw new errors_1.UnauthenticatedError(err.message);
        req.user = payload;
        next();
    });
};
exports.default = authenticateTokenMiddleware;
