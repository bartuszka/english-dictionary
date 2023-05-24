import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { WordType } from '../../models/word-type';
import { VerbType } from '../../models/verb-type';
import { NounType } from '../../models/noun-type';
import { allVerbTypes } from '../data/all-verb-types';
import { WordTypeShortcutPipe } from '../../../shared/pipes/word-type-shortcut.pipe';
import { allNounTypes } from '../data/all-noun-types';
import {
  GeneralTranslationsFormArrayType,
  GeneralWordWithTranslationsFormType
} from '../../models/add-word-form/word-form.models';

@Component({
  selector: 'app-add-word-transition',
  templateUrl: './add-word-transition.component.html',
  styleUrls: ['../styles/add-word.styles.scss', './add-word-transition.component.scss'],
})
export class AddWordTransitionComponent implements OnInit {
  @Input() public wordWithTranslationsForm: GeneralWordWithTranslationsFormType;
  @Input() public wordType: WordType;
  @Output() public removeTransitionSelected: EventEmitter<number> = new EventEmitter<number>();

  public allTypes: VerbType[] | NounType[];
  public allTypeShortcuts: string[];
  public translationsFormArray: GeneralTranslationsFormArrayType;
  public translationColClasses: string;
  public translationRowClasses: string;
  public colNumber: number;

  public constructor(private wordTypeShortcutPipe: WordTypeShortcutPipe) {}

  public ngOnInit(): void {
    this.translationsFormArray = this.wordWithTranslationsForm.controls.translations;
    this.wordType === WordType.VERB ? this.setAllVerbTypes() : this.setAllNounTypes();
    this.colNumber = this.wordType !== WordType.OTHER ? 5 : 4;
    this.translationColClasses = this.wordType !== WordType.OTHER
      ? `col col-${ this.colNumber } col-xl-1`
      : `col col-${ this.colNumber } col-lg-${ this.colNumber/2 } col-xl-1`;
    this.translationRowClasses = `row row-${this.colNumber} row-center`;
  }

  public removeTransition(transitionIndex: number): void {
    this.removeTransitionSelected.emit(transitionIndex);
  }

  private setAllVerbTypes(): void {
    this.allTypes = allVerbTypes;
    this.allTypeShortcuts = allVerbTypes.map((verbType: VerbType) => this.wordTypeShortcutPipe.transform(verbType));
  }

  private setAllNounTypes(): void {
    this.allTypes = allNounTypes;
    this.allTypeShortcuts = allNounTypes.map((nounType: NounType) => this.wordTypeShortcutPipe.transform(nounType));
  }
}
