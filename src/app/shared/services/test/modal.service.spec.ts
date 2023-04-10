import { ModalService } from '../modal.service';
import { TestBed } from '@angular/core/testing';
import { ModalCallback } from '../../models/modal-callback';

describe('ModalService', () => {
  const modalCallback: ModalCallback = () => null;
  let modalService: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalService
      ]
    });
  });

  beforeEach(() => {
    modalService = TestBed.inject(ModalService);
  });

  it('Should call showModal', (done: DoneFn) => {
    modalService.modal$.subscribe((data: ModalCallback) => {
      expect(data).toBe(modalCallback);
      done();
    });

    modalService.showModal(modalCallback);
  });
});
