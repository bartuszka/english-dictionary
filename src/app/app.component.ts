import { Component, OnInit, ViewChild } from '@angular/core';

import { takeUntil } from 'rxjs';

import { ErrorPlaceholderDirective } from './shared/modules/error/error-placeholder.directive';
import { ModalCallback } from './models/modal-callback';
import { Destroyable } from './shared/directives/destroyable';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Destroyable implements OnInit {
  @ViewChild(ErrorPlaceholderDirective, { static: true }) public errorHost: ErrorPlaceholderDirective;

  constructor(private modalService: ModalService) {
    super();
  }

  public ngOnInit(): void {
    this.modalService.modal$
      .pipe(takeUntil(this.destroy$))
      .subscribe((modalCallback: ModalCallback) => this.showModal(modalCallback));
  }

  private showModal(modalCallback: ModalCallback): void {
    this.errorHost.viewContainerRef.clear();
    modalCallback(this.errorHost.viewContainerRef);
  }
}
