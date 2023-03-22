import { Directive, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';

@Directive()
export class GeneralErrorDirective implements OnDestroy {
  public error: HttpErrorResponse;
  public title: string = 'Error';
  public $close;
  private $closeSubject;

  constructor() {
    this.$closeSubject = new Subject<void>();
    this.$close = this.$closeSubject.asObservable();
  }

  public ngOnDestroy(): void {
    this.$closeSubject.complete();
  }

  public close(): void {
    this.$closeSubject.next();
    this.$closeSubject.complete();
  }
}
