import { Directive } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Destroyable } from './destroyable';

@Directive()
export abstract class Deactivable extends Destroyable {
  public canDeactivate$: Observable<boolean>;
  protected canDeactivateSubject$: Subject<boolean>;

  protected abstract confirmDeactivate(): Observable<boolean>;

  protected constructor() {
    super();
    this.canDeactivateSubject$ = new Subject<boolean>();
    this.canDeactivate$ = this.canDeactivateSubject$.asObservable();
  }
}
