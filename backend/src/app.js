"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const words_1 = __importDefault(require("./routes/words"));
const expressApp = (0, express_1.default)();
expressApp.use(body_parser_1.default.json());
expressApp.use(body_parser_1.default.urlencoded({ extended: false }));
expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X_Request-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});
expressApp.use(words_1.default);
expressApp.use((error, req, res, next) => {
    res.status(error.status).json(error);
});
exports.default = expressApp;
