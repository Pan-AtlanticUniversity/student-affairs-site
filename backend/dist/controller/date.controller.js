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
exports.getDateById = exports.deleteDate = exports.updateDate = exports.createDate = exports.getDate = void 0;
const model_1 = require("../model");
const http_status_codes_1 = require("http-status-codes");
const getDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = yield model_1.Date.find();
    res.status(http_status_codes_1.StatusCodes.OK).json(date);
});
exports.getDate = getDate;
const createDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new model_1.Date(req.body);
    try {
        const newDate = yield date.save();
        res.status(201).json(newDate);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createDate = createDate;
const updateDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = yield model_1.Date.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!date)
            return res.status(404).json({ message: 'Date not found' });
        res.json(date);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateDate = updateDate;
const deleteDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = yield model_1.Date.findByIdAndDelete(req.params._id);
        if (!date)
            return res.status(404).json({ message: 'Date not found' });
        res.json({ message: 'Date deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteDate = deleteDate;
// get Date by ID
const getDateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = yield model_1.Date.findById(req.params._id);
        if (!date)
            return res.status(404).json({ message: 'Date not found' });
        res.status(http_status_codes_1.StatusCodes.OK).json(date);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getDateById = getDateById;
