import { Component, OnInit } from '@angular/core';
import { WordsStateService } from '../services/words-state.service';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Word } from '../models/general-word';
import { ErrorHandlingService } from '../../error/error-handling.service';
import { Deactivable } from '../../shared/directives/deactivable';
import { WarningMessages } from '../../error/models/warning-messages';
import { NavigationLink } from '../../shared/models/navigation-link';
import {
  GeneralWordWithTranslationsFormType,
  NounForm, NounWithTranslationsForm,
  OtherWordForm, OtherWordWithTranslationsForm,
  VerbForm,
  VerbWithTranslationsForm,
} from '../models/add-word-form/word-form.models';
import { AddWordFormService } from './services/add-word-form.service';
import { WordType } from '../models/word-type';
import { DoubleColorMode } from 'bch-dc-components';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent extends Deactivable implements OnInit {
  public editedWord: Word;
  public wordTypes: typeof WordType = WordType;

  public verbFormGroup: FormGroup<VerbForm>;
  public nounFormGroup: FormGroup<NounForm>;
  public otherWordFormGroup: FormGroup<OtherWordForm>;

  public verbWithTranslationsForm: FormGroup<VerbWithTranslationsForm>;
  public nounWithTranslationsForm: FormGroup<NounWithTranslationsForm>;
  public otherWordWithTranslationsForm: FormGroup<OtherWordWithTranslationsForm>;

  public colorModes: typeof DoubleColorMode = DoubleColorMode;

  constructor(
    private wordsStateService: WordsStateService,
    private addWordFormService: AddWordFormService,
    private errorHandlingService: ErrorHandlingService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initializeWordForm();
  }

  public confirmDeactivate(): Observable<boolean> {
    if (!this.editedWord) {
      return of(true);
    }

    this.errorHandlingService.showWarning(WarningMessages.ADD_WORD_LEAVE_CONFIRM, () => {
      this.canDeactivateSubject$.next(true);
    });

    return this.canDeactivate$;
  }

  public addWord(): void {
    const handledForm: GeneralWordWithTranslationsFormType = this.getHandledForm();
    console.log('SUBMIT FORM', handledForm.value);
  }

  private initializeWordForm(): void {
    const editedWordId: string = this.route.snapshot.params['id'];

    this.wordsStateService
      .getWordFromState(editedWordId)
      .subscribe((word: Word) =>
        editedWordId && !word
          ? this.router.navigate([`/${NavigationLink.SEARCH_RESULTS}`])
          : this.setProperWordForms(word),
      );
  }

  private setProperWordForms(editedWord: Word): void {
    this.editedWord = editedWord;

    switch (this.editedWord.wordType) {
      case WordType.VERB: {
        this.verbFormGroup = this.addWordFormService.createVerbForm(this.editedWord);
        this.verbWithTranslationsForm = new FormGroup<VerbWithTranslationsForm>({
          verbDataForm: this.verbFormGroup,
          translations: this.addWordFormService.createVerbTranslationsFormArray(this.editedWord)
        });
        break;
      }
      case WordType.NOUN:
        this.nounFormGroup = this.addWordFormService.createNounForm(this.editedWord);
        this.nounWithTranslationsForm = new FormGroup<NounWithTranslationsForm>({
          nounDataForm: this.nounFormGroup,
          translations: this.addWordFormService.createNounTranslationsFormArray(this.editedWord)
        });
        break;
      default:
        this.otherWordFormGroup = this.addWordFormService.createOtherWordForm(this.editedWord);
        this.otherWordWithTranslationsForm = new FormGroup<OtherWordWithTranslationsForm>({
          otherWordDataForm: this.otherWordFormGroup,
          translations: this.addWordFormService.createOtherWordTranslationsFormArray(this.editedWord)
        });
        break;
    }
  }

  private getHandledForm(): GeneralWordWithTranslationsFormType {
    switch (this.editedWord.wordType) {
      case WordType.VERB:
        return this.verbWithTranslationsForm;
      case WordType.NOUN:
        return this.nounWithTranslationsForm;
      default:
        return this.otherWordWithTranslationsForm;
    }
  }

  protected readonly DoubleColorMode = DoubleColorMode;
}
