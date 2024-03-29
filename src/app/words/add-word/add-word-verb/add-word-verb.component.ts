import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { VerbType } from '../../models/verb-type';
import { allVerbTypes } from '../data/all-verb-types';
import { WordTypeShortcutPipe } from '../../../shared/pipes/word-type-shortcut.pipe';
import { VerbForm } from '../../models/add-word-form/word-form.models';

@Component({
  selector: 'app-add-word-verb',
  templateUrl: './add-word-verb.component.html',
  styleUrls: ['../styles/add-word.styles.scss', './add-word-verb.component.scss']
})
export class AddWordVerbComponent implements OnInit {
  @Input() public verbForm: FormGroup<VerbForm>;

  public allTypes: VerbType[];
  public allTypeShortcuts: string[];
  public verbColClasses: string = 'col col-8 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-1';

  constructor(private wordTypeShortcutPipe: WordTypeShortcutPipe) {}

  public ngOnInit(): void {
    this.setAllTypes();
  }

  private setAllTypes(): void {
    this.allTypes = allVerbTypes;
    this.allTypeShortcuts = allVerbTypes.map((verbType: VerbType) => this.wordTypeShortcutPipe.transform(verbType));
  }
}
