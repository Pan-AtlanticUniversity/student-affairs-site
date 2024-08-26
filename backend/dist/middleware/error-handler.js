"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof errors_1.CustomAPIError)
        return res.status(err.statusCode).json({ message: err.message });
    return res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .send(err);
};
exports.default = errorHandlerMiddleware;
