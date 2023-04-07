import { ErrorCode } from './error-code';
import { ErrorMessage } from './error-message';

export interface ServerError {
  code: ErrorCode,
  status: number,
  message: ErrorMessage
}
