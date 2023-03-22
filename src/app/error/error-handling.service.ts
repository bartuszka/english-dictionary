import { HttpErrorResponse } from '@angular/common/http';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { ErrorCallback } from '../models/error-callback';
import { ServerErrorComponent } from './error-components/server-error/server-error.component';
import { GeneralErrorDirective } from './error-components/general-error/general-error.directive';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  private $errorSubject: Subject<ErrorCallback>;
  public $error: Observable<ErrorCallback>;

  constructor() {
    this.$errorSubject = new Subject<ErrorCallback>();
    this.$error = this.$errorSubject.asObservable();
  }

  public showServerError(error: HttpErrorResponse): void {
    const errorCb: ErrorCallback = (hostViewContainerRef: ViewContainerRef) => {
      hostViewContainerRef.clear();
      const componentRef: ComponentRef<ServerErrorComponent> = hostViewContainerRef.createComponent(ServerErrorComponent);
      componentRef.instance.error = error;
      componentRef.instance.title = 'Server Error';
      componentRef.instance.$close.subscribe(() => hostViewContainerRef.clear());
    }

    this.$errorSubject.next(errorCb);
  }

  public showCustomError<CustomErrorClass extends GeneralErrorDirective>(
    error: HttpErrorResponse,
    CustomErrorClass: new () => CustomErrorClass
  ) {
    /*const errorCb: ErrorCallback = (hostViewContainerRef: ViewContainerRef) => {
      const componentRef: ComponentRef<CustomErrorClass> = hostViewContainerRef.createComponent(CustomErrorClass);
    }

    this.$errorSubject.next(errorCb);*/
  }
}
