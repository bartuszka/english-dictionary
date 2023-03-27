import { Directive } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive()
export abstract class Deactivable {
  public canDeactivate$: Observable<boolean>;
  protected canDeactivateSubject$: Subject<boolean>;

  protected abstract confirmDeactivate(): Observable<boolean>;

  protected constructor() {
    this.canDeactivateSubject$ = new Subject<boolean>();
    this.canDeactivate$ = this.canDeactivateSubject$.asObservable();
  }
}
