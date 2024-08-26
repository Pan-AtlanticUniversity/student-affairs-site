"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const http_status_codes_1 = require("http-status-codes");
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    }
    else {
        cb(new Error("Error: Images Only!"));
    }
};
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    fileFilter,
});
const uploadHandler = (req, res, next) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            if (err instanceof multer_1.default.MulterError) {
                return res
                    .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                    .json({ message: err.message });
            }
            else {
                return res
                    .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                    .json({ message: err.message });
            }
        }
        next();
    });
};
exports.default = uploadHandler;
