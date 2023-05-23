import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordOtherComponent } from './add-word-other.component';
import { testOtherWordForm } from './test/other-word-test-data';
import { AddWordModule } from '../add-word.module';

describe('AddWordOtherComponent', () => {
  let component: AddWordOtherComponent;
  let fixture: ComponentFixture<AddWordOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddWordModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordOtherComponent);
    component = fixture.componentInstance;
    component.otherWordForm = testOtherWordForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
