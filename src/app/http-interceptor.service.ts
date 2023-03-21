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

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isManualErrorHandling: boolean = !!req.params.get(ErrorHandlingHttpParams.MANUAL_ERROR_HANDLING);
    const modifiedRequest = req.clone({ url: environment.serverAddress + req.url, params: req.params.delete(ErrorHandlingHttpParams.MANUAL_ERROR_HANDLING) });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status >= 500) {
          // TO-DO Use Default Error Handling
          return EMPTY;
        }

        if (error.status >= 400) {
          if (isManualErrorHandling) {
            // TO-DO Use headers to default or manual error handling
          } else {
            // TO-DO Use headers to default or manual error handling
          }
        }

        return throwError(() => error);
      })
    );
  }
}
