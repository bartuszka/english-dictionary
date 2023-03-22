import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { catchError, EMPTY, Observable, throwError } from 'rxjs';

import { environment } from '../environments/environment';
import { ErrorHandlingHttpParams } from './models/error-handling-http-params';
import { ErrorHandlingService } from './error/error-handling.service';
import { CustomErrorComponent } from './error/error-components/custom-error/custom-error.component';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private errorHandlingService: ErrorHandlingService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isManualErrorHandling: boolean = !!req.params.get(ErrorHandlingHttpParams.MANUAL_ERROR_HANDLING);
    const modifiedRequest = req.clone({ url: environment.serverAddress + req.url, params: req.params.delete(ErrorHandlingHttpParams.MANUAL_ERROR_HANDLING) });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status >= 500) {
          this.errorHandlingService.showServerError(error);
          return EMPTY;
        }

        if (error.status >= 400) {
          if (isManualErrorHandling) {
            this.errorHandlingService.showCustomError(error, CustomErrorComponent);
          } else {
            // this.errorHandlingService.showCustomError(error, CustomErrorComponent);
          }
        }

        return throwError(() => error);
      })
    );
  }
}
