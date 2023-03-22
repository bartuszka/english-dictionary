import { HttpErrorResponse } from '@angular/common/http';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { ServerErrorComponent } from './error-components/server-error/server-error.component';
import { GeneralErrorDirective } from './error-components/general-error/general-error.directive';
import { ModalCallback } from '../../../models/modal-callback';
import { ModalService } from '../../services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(private modalService: ModalService) {}

  public showServerError(error: HttpErrorResponse): void {
    const errorCb: ModalCallback = (hostViewContainerRef: ViewContainerRef) => {
      const componentRef: ComponentRef<ServerErrorComponent> = hostViewContainerRef.createComponent(ServerErrorComponent);
      componentRef.instance.error = error;
      componentRef.instance.title = 'Server Error';
      componentRef.instance.$close.subscribe(() => hostViewContainerRef.clear());
    }

    this.modalService.showModal(errorCb);
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
