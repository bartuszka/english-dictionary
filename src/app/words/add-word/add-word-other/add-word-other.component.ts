import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OtherWordForm } from '../../models/add-word-form/word-form.models';

@Component({
  selector: 'app-add-word-other',
  templateUrl: './add-word-other.component.html',
  styleUrls: ['../styles/add-word.styles.scss', './test/add-word-other.component.scss']
})
export class AddWordOtherComponent {
  @Input() public otherWordForm: FormGroup<OtherWordForm>;

  public otherColClasses: string = 'col col-3 col-lg-3 col-xl-1 col-xxl-1';
}
