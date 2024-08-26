"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = exports.Blog = exports.Club = exports.Book = exports.User = void 0;
const user_model_1 = __importDefault(require("./user.model"));
exports.User = user_model_1.default;
const book_model_1 = __importDefault(require("./book.model"));
exports.Book = book_model_1.default;
const club_model_1 = __importDefault(require("./club.model"));
exports.Club = club_model_1.default;
const blog_model_1 = __importDefault(require("./blog.model"));
exports.Blog = blog_model_1.default;
const date_model_1 = __importDefault(require("./date.model"));
exports.Date = date_model_1.default;
