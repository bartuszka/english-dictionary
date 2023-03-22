import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalCallback } from '../../models/modal-callback';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private $modalSubject: Subject<ModalCallback>;
  public modal$: Observable<ModalCallback>;

  constructor() {
    this.$modalSubject = new Subject<ModalCallback>();
    this.modal$ = this.$modalSubject.asObservable();
  }

  public showModal(modalCallback: ModalCallback): void {
    this.$modalSubject.next(modalCallback);
  }
}
