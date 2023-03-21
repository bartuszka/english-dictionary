import { HttpParams } from '@angular/common/http';
import { ErrorHandlingHttpParams } from '../models/error-handling-http-params';

export function addManualErrorHandlingParam(existingParams?: HttpParams): HttpParams {
  return (existingParams ? existingParams : new HttpParams).append(ErrorHandlingHttpParams.MANUAL_ERROR_HANDLING, true);
}
