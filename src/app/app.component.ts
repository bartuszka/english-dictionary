import { Component, OnInit, ViewChild } from '@angular/core';

import { takeUntil } from 'rxjs';

import { ErrorPlaceholderDirective } from './error/error-placeholder.directive';
import { ErrorHandlingService } from './error/error-handling.service';
import { ErrorCallback } from './models/error-callback';
import { Destroyable } from './shared/directives/destroyable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Destroyable implements OnInit {
  @ViewChild(ErrorPlaceholderDirective, { static: true }) public errorHost: ErrorPlaceholderDirective;

  constructor(private errorHandlingService: ErrorHandlingService) {
    super();
  }

  public ngOnInit(): void {
    this.errorHandlingService.$error
      .pipe(takeUntil(this.destroy$))
      .subscribe((errorCallback: ErrorCallback) => this.showServerError(errorCallback));
  }

  private showServerError(errorCallback: ErrorCallback): void {
    errorCallback(this.errorHost.viewContainerRef);
  }
}
