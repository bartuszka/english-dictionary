import { HttpErrorResponse } from '@angular/common/http';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { ServerErrorComponent } from './error-components/server-error/server-error.component';
import { GeneralErrorDirective } from './error-components/general-error/general-error.directive';
import { ModalCallback } from '../shared/models/modal-callback';
import { ModalService } from '../shared/services/modal.service';
import { ClientErrorComponent } from './error-components/client-error/client-error.component';
import { InternalError } from './models/error';

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

  public showClientError(error: HttpErrorResponse): void {
    const errorCb: ModalCallback = (hostViewContainerRef: ViewContainerRef) => {
      const componentRef: ComponentRef<ClientErrorComponent> = hostViewContainerRef.createComponent(ClientErrorComponent);
      componentRef.instance.error = error;
      componentRef.instance.title = 'Client Error';
      componentRef.instance.$close.subscribe(() => hostViewContainerRef.clear());
    }

    this.modalService.showModal(errorCb);
  }

  public showCustomError<CustomErrorClass extends GeneralErrorDirective>(error: HttpErrorResponse, CustomErrorClass: new () => CustomErrorClass) {
    const errorCb: ModalCallback = (hostViewContainerRef: ViewContainerRef) => {
      const componentRef: ComponentRef<CustomErrorClass> = hostViewContainerRef.createComponent(CustomErrorClass);
      componentRef.instance.error = error;
      componentRef.instance.$close.subscribe(() => hostViewContainerRef.clear());
    }

    this.modalService.showModal(errorCb);
  }

  public showInternalError(error: InternalError) {
    throw error;
  }
}
