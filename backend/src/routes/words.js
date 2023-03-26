"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const words_1 = require("../data/words");
const errors_1 = __importDefault(require("../data/errors"));
const error_name_1 = require("../models/error/error-name");
const wordsRouter = express_1.default.Router();
wordsRouter.get('/api/words', (req, res) => {
    // res.status(500).send();
    res.json(words_1.words);
});
wordsRouter.post('/api/add-word', (req, res, next) => {
    const existingWord = words_1.words.find((word) => word.id === req.body.id);
    if (existingWord) {
        next(errors_1.default.get(error_name_1.ErrorName.EXISTING_WORD));
    }
    else {
        const copiedBody = Object.assign({}, req.body);
        words_1.words.push(copiedBody);
        res.json(copiedBody);
    }
});
wordsRouter.post('/api/edit-word', (req, res, next) => {
    const existingWordIndex = words_1.words.findIndex((word) => word.id === req.body.id);
    if (existingWordIndex === -1) {
        next(errors_1.default.get(error_name_1.ErrorName.NOT_EXISTING_WORD));
    }
    else {
        const copiedBody = Object.assign({}, req.body);
        words_1.words[existingWordIndex] = copiedBody;
        res.json(copiedBody);
    }
});
exports.default = wordsRouter;
