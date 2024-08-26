"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthenticatedError = exports.BadRequest = exports.CustomAPIError = void 0;
const custom_error_1 = __importDefault(require("./custom-error"));
exports.CustomAPIError = custom_error_1.default;
const bad_request_1 = __importDefault(require("./bad-request"));
exports.BadRequest = bad_request_1.default;
const unauthenticated_1 = __importDefault(require("./unauthenticated"));
exports.UnauthenticatedError = unauthenticated_1.default;
