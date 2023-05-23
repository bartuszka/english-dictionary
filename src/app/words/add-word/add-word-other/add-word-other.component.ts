import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WordType } from '../../models/word-type';
import { allWordTypes } from '../data/all-word-types';
import { OtherWordForm } from '../../models/add-word-form/word-form.models';

@Component({
  selector: 'app-add-word-other',
  templateUrl: './add-word-other.component.html',
  styleUrls: ['../styles/add-word.styles.scss', './test/add-word-other.component.scss']
})
export class AddWordOtherComponent implements OnInit {
  @Input() public otherWordForm: FormGroup<OtherWordForm>;

  public allWordTypes: WordType[];
  public allWordTypeMessages: string[];
  public otherColClasses: string = 'col col-3 col-lg-3 col-xl-1 col-xxl-1';

  public ngOnInit(): void {
    this.setAllWordTypes();
  }

  private setAllWordTypes(): void {
    this.allWordTypes = allWordTypes;
    this.allWordTypeMessages = allWordTypes.map((wordType: WordType) => wordType.slice(0, 1).toUpperCase() + wordType.slice(1));
  }
}
