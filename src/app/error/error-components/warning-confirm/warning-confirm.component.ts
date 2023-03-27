import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-warning-confirm',
  templateUrl: './warning-confirm.component.html',
  styleUrls: ['../../error-styles.scss', './warning-confirm.component.scss']
})
export class WarningConfirmComponent implements OnDestroy {
  @Input() public message: string;

  public showConfirm: boolean;
  public title: string = 'Error';

  public close$;
  public confirm$;

  private confirmSubject$;
  private closeSubject$;

  constructor() {
    this.closeSubject$ = new Subject<void>();
    this.close$ = this.closeSubject$.asObservable();
    this.confirmSubject$ = new Subject<void>();
    this.confirm$ = this.confirmSubject$.asObservable();
  }

  public ngOnDestroy(): void {
    this.closeSubject$.complete();
    this.confirmSubject$.complete();
  }

  public close(): void {
    this.closeSubject$.next();
    this.closeSubject$.complete();
  }

  public confirm(): void {
    this.confirmSubject$.next();
    this.confirmSubject$.complete();
  }
}
