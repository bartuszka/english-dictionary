import { ErrorName } from '../models/error/error-name';
import { ErrorMessage } from '../models/error/error-message';
import { ErrorCode } from '../models/error/error-code';
import { ServerError } from '../models/error/error';

const errors: Map<string, ServerError> = new Map();

errors.set(ErrorName.EXISTING_WORD, { code: ErrorCode.GENERAL_ERROR_CODE, status: 403, message: ErrorMessage.EXISTING_WORD_MSG });
errors.set(ErrorName.NOT_EXISTING_WORD, { code: ErrorCode.GENERAL_ERROR_CODE, status: 403, message: ErrorMessage.NOT_EXISTING_WORD_MSG });

export default errors;
