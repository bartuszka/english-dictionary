import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordTransitionComponent } from '../add-word-transition.component';
import { AddWordModule } from '../../add-word.module';
import { verbWithTransitionsForm } from './add-word-transition-test-data';

describe('AddWordTransitionComponent', () => {
  let component: AddWordTransitionComponent;
  let fixture: ComponentFixture<AddWordTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddWordModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordTransitionComponent);
    component = fixture.componentInstance;
    component.wordWithTranslationsForm = verbWithTransitionsForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
