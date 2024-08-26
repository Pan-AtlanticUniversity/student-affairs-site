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
exports.getClubById = exports.deleteClub = exports.updateClub = exports.createClub = exports.getClub = void 0;
const model_1 = require("../model");
const http_status_codes_1 = require("http-status-codes");
//this gets all clubs
const getClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const club = yield model_1.Club.find();
    res.status(http_status_codes_1.StatusCodes.OK).json(club);
});
exports.getClub = getClub;
const createClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const club = new model_1.Club(req.body);
    try {
        const newClub = yield club.save();
        res.status(201).json(newClub);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createClub = createClub;
const updateClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const club = yield model_1.Club.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!club)
            return res.status(404).json({ message: 'Club not found' });
        res.json(club);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateClub = updateClub;
const deleteClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const club = yield model_1.Club.findByIdAndDelete(req.params._id);
        if (!club)
            return res.status(404).json({ message: 'Club not found' });
        res.json({ message: 'Club deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteClub = deleteClub;
// get club by ID
const getClubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const club = yield model_1.Club.findById(req.params._id);
        if (!club)
            return res.status(404).json({ message: 'Club not found' });
        res.status(http_status_codes_1.StatusCodes.OK).json(club);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getClubById = getClubById;
