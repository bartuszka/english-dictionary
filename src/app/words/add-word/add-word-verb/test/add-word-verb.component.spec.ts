import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordVerbComponent } from '../add-word-verb.component';
import { AddWordModule } from '../../add-word.module';
import { testVerbForm } from './verb-foem-test-data';

describe('AddWordVerbComponent', () => {
  let component: AddWordVerbComponent;
  let fixture: ComponentFixture<AddWordVerbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddWordModule ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordVerbComponent);
    component = fixture.componentInstance;
    component.verbForm = testVerbForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
