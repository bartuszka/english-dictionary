import { InternalError } from './models/error';
import { InternalErrorCode } from './models/error-code';
import { InternalErrorMessage } from './models/error-message';

export const internalErrors: Map<InternalErrorCode, InternalError> = new Map();

internalErrors.set(
  InternalErrorCode.ROUTER_LINK_NOT_MATCHING_HEADER_OPTIONS,
  {
    code: InternalErrorCode.ROUTER_LINK_NOT_MATCHING_HEADER_OPTIONS,
    status: 302,
    message: InternalErrorMessage.ROUTER_LINK_NOT_MATCHING_HEADER_OPTIONS
  });
