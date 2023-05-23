import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordNounComponent } from '../../add-word-noun.component';
import { AddWordModule } from '../../../add-word.module';
import { testNounForm } from './noun-form-test-data';

describe('AddWordNounComponent', () => {
  let component: AddWordNounComponent;
  let fixture: ComponentFixture<AddWordNounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddWordModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordNounComponent);
    component = fixture.componentInstance;
    component.nounForm = testNounForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
