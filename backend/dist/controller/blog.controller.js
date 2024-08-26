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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogById = exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlog = void 0;
const model_1 = require("../model");
const http_status_codes_1 = require("http-status-codes");
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield model_1.Blog.find();
    res.status(http_status_codes_1.StatusCodes.OK).json(blog);
});
exports.getBlog = getBlog;
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { title, content, author } = req.body;
        let imageBase64 = (_b = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer.toString("base64")) !== null && _b !== void 0 ? _b : "";
        const newPost = new model_1.Blog({
            author,
            title,
            content,
            image: `data:${(_c = req.file) === null || _c === void 0 ? void 0 : _c.mimetype};base64,${imageBase64}`,
        });
        yield newPost.save();
        res
            .status(http_status_codes_1.StatusCodes.OK)
            .json({ message: "Blog post created successfully" });
    }
    catch (error) {
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Failed to create blog post", error });
    }
});
exports.createBlog = createBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //backslash because id in the db is _id
        const blog = yield model_1.Blog.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        });
        if (!blog)
            return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield model_1.Blog.findByIdAndDelete(req.params._id);
        if (!blog)
            return res.status(404).json({ message: "Blog not found" });
        res.json({ message: "Blog deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteBlog = deleteBlog;
// get blog by ID
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield model_1.Blog.findById(req.params._id);
        if (!blog)
            return res.status(404).json({ message: "blog not found" });
        res.status(http_status_codes_1.StatusCodes.OK).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getBlogById = getBlogById;
