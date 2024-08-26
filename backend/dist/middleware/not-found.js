"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const notFound = (req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        message: 'Not Found',
    });
};
exports.default = notFound;
