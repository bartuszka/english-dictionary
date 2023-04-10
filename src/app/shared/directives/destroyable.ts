import { Directive, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Directive()
export class Destroyable implements OnDestroy {
  private destroySubject$: Subject<void>;
  protected destroy$: Observable<void>;

  constructor() {
    this.destroySubject$ = new Subject<void>();
    this.destroy$ = this.destroySubject$.asObservable();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
