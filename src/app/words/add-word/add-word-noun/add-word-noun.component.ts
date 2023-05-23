import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WordType } from '../../models/word-type';
import { allWordTypes } from '../data/all-word-types';
import { allNounTypes } from '../data/all-noun-types';
import { NounType } from '../../models/noun-type';
import { WordTypeShortcutPipe } from '../../../shared/pipes/word-type-shortcut.pipe';
import { NounForm } from '../../models/add-word-form/word-form.models';

@Component({
  selector: 'app-add-word-noun',
  templateUrl: './add-word-noun.component.html',
  styleUrls: ['../styles/add-word.styles.scss', './add-word-noun.component.scss']
})
export class AddWordNounComponent implements OnInit {
  @Input() public nounForm: FormGroup<NounForm>;

  public allWordTypes: WordType[];
  public allTypes: NounType[];
  public allTypeShortcuts: string[];
  public allWordTypeMessages: string[];
  public nounColClasses: string = 'col col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-1';

  constructor(private wordTypeShortcutPipe: WordTypeShortcutPipe) {}

  public ngOnInit(): void {
    this.setAllTypes();
    this.setAllWordTypes();
  }

  private setAllTypes(): void {
    this.allTypes = allNounTypes;
    this.allTypeShortcuts = allNounTypes.map((nounType: NounType) => this.wordTypeShortcutPipe.transform(nounType));
  }

  private setAllWordTypes(): void {
    this.allWordTypes = allWordTypes;
    this.allWordTypeMessages = allWordTypes.map((wordType: WordType) => wordType.slice(0, 1).toUpperCase() + wordType.slice(1));
  }
}
