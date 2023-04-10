import { TestBed } from '@angular/core/testing';
import { Destroyable } from '../destroyable';

describe('Destroyable', () => {
  let destroyableComponent: Destroyable;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Destroyable,
      ]
    });
  });

  beforeEach(() => {
    destroyableComponent = TestBed.inject(Destroyable);
  });


  it('Should emit to destroy$ from ngOnDestroy', (done: DoneFn) => {
    destroyableComponent['destroy$'].subscribe(() => {
      done();
    });

    destroyableComponent.ngOnDestroy();
  });
});
