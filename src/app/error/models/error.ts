import { ExternalErrorMessage, InternalErrorMessage } from './error-message';
import { ExternalErrorCode, InternalErrorCode } from './error-code';

export interface InternalError {
  code: InternalErrorCode,
  status: number,
  message: InternalErrorMessage
}

export interface ExternalError {
  code: ExternalErrorCode,
  status: number,
  message: ExternalErrorMessage
}
