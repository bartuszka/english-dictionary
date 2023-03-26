"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_name_1 = require("../models/error/error-name");
const error_code_1 = require("../models/error/error-code");
const error_message_1 = require("../models/error/error-message");
const errors = new Map();
errors.set(error_name_1.ErrorName.EXISTING_WORD, { code: error_code_1.ErrorCode.GENERAL_ERROR_CODE, status: 403, message: error_message_1.ErrorMessage.EXISTING_WORD_MSG });
errors.set(error_name_1.ErrorName.NOT_EXISTING_WORD, { code: error_code_1.ErrorCode.GENERAL_ERROR_CODE, status: 403, message: error_message_1.ErrorMessage.NOT_EXISTING_WORD_MSG });
exports.default = errors;
