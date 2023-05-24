import { Component, OnInit } from '@angular/core';
import { WordsStateService } from '../services/words-state.service';
import { Observable, of } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Word } from '../models/general-word';
import { ErrorHandlingService } from '../../error/error-handling.service';
import { Deactivable } from '../../shared/directives/deactivable';
import { WarningMessages } from '../../error/models/warning-messages';
import { NavigationLink } from '../../shared/models/navigation-link';
import {
  GeneralWordWithTranslationsFormType,
  NounForm,
  NounWithTranslationsForm,
  OtherWordForm,
  OtherWordWithTranslationsForm,
  VerbForm,
  VerbWithTranslationsForm,
} from '../models/add-word-form/word-form.models';
import { AddWordFormService } from './services/add-word-form.service';
import { WordType } from '../models/word-type';
import { DoubleColorMode } from 'bch-dc-components';
import { emptyVerb } from './data/empty-verb';
import { emptyNoun } from './data/empty-noun';
import { emptyOtherWord } from './data/empty-other-word';
import { emptyVerbTranslation } from './data/empty-verb-translation';
import { emptyNounTranslation } from './data/empty-noun-translation';
import { emptyOtherWordTranslation } from './data/empty-other-word-translation';
import { AddWordMode } from '../models/add-word-mode.model';
import { allWordTypes } from './data/all-word-types';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent extends Deactivable implements OnInit {
  public editedWord: Word;
  public wordTypes: typeof WordType = WordType;
  public mode: AddWordMode;
  public modes: typeof AddWordMode = AddWordMode;
  public allWordTypes: WordType[];
  public allWordTypeMessages: string[];

  public verbFormGroup: FormGroup<VerbForm>;
  public nounFormGroup: FormGroup<NounForm>;
  public otherWordFormGroup: FormGroup<OtherWordForm>;

  public verbWithTranslationsForm: FormGroup<VerbWithTranslationsForm>;
  public nounWithTranslationsForm: FormGroup<NounWithTranslationsForm>;
  public otherWordWithTranslationsForm: FormGroup<OtherWordWithTranslationsForm>;
  public handledWordForm: GeneralWordWithTranslationsFormType;

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
    this.setAllWordTypes();
    this.initializeWordForm();
    this.setHandledForm();
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
    const handledForm: GeneralWordWithTranslationsFormType = this.handledWordForm;
    console.log('SUBMIT FORM', handledForm.value);
  }

  public removeTransition(transitionIndex: number): void {
    (this.handledWordForm.controls.translations as FormArray).removeAt(transitionIndex);
  }

  public addTranslation(): void {
    switch (this.editedWord.wordType) {
      case WordType.VERB:
        (this.handledWordForm.controls.translations as FormArray).push(this.addWordFormService.getVerbTransitionExampleFormGroup(emptyVerbTranslation));
        break;
      case WordType.NOUN:
        (this.handledWordForm.controls.translations as FormArray).push(this.addWordFormService.getNounTransitionExampleFormGroup(emptyNounTranslation));
        break;
      default:
        (this.handledWordForm.controls.translations as FormArray).push(this.addWordFormService.getOtherWordTransitionExampleFormGroup(emptyOtherWordTranslation));
        break;
    }
  }

  private initializeWordForm(): void {
    const editedWordId: string = this.route.snapshot.params['id'];

    this.wordsStateService.getWordFromState(editedWordId).subscribe((word: Word) => {
      if (editedWordId && !word) {
        this.router.navigate([`/${NavigationLink.SEARCH_RESULTS}`]);
      } else {
        this.mode = editedWordId ? AddWordMode.EDIT : AddWordMode.ADD;
        this.setProperWordForms(word || emptyVerb);
      }
    });
  }

  private setProperWordForms(editedWord: Word): void {
    this.editedWord = editedWord;

    switch (this.editedWord.wordType) {
      case WordType.VERB: {
        this.verbFormGroup = this.addWordFormService.createVerbForm(this.editedWord);
        this.verbWithTranslationsForm = new FormGroup<VerbWithTranslationsForm>({
          wordDataForm: this.verbFormGroup,
          translations: this.addWordFormService.createVerbTranslationsFormArray(this.editedWord),
        });
        break;
      }
      case WordType.NOUN:
        this.nounFormGroup = this.addWordFormService.createNounForm(this.editedWord);
        this.nounWithTranslationsForm = new FormGroup<NounWithTranslationsForm>({
          wordDataForm: this.nounFormGroup,
          translations: this.addWordFormService.createNounTranslationsFormArray(this.editedWord),
        });
        break;
      default:
        this.otherWordFormGroup = this.addWordFormService.createOtherWordForm(this.editedWord);
        this.otherWordWithTranslationsForm = new FormGroup<OtherWordWithTranslationsForm>({
          wordDataForm: this.otherWordFormGroup,
          translations: this.addWordFormService.createOtherWordTranslationsFormArray(this.editedWord),
        });
        break;
    }
  }

  private setHandledForm(): void {
    switch (this.editedWord.wordType) {
      case WordType.VERB:
        this.handledWordForm = this.verbWithTranslationsForm;
        break;
      case WordType.NOUN:
        this.handledWordForm = this.nounWithTranslationsForm;
        break;
      default:
        this.handledWordForm = this.otherWordWithTranslationsForm;
        break;
    }
  }

  public changeForms(wordType: WordType): void {
    switch (wordType) {
      case WordType.VERB:
        this.setProperWordForms(emptyVerb);
        break;
      case WordType.NOUN:
        this.setProperWordForms(emptyNoun);
        break;
      default:
        this.setProperWordForms(emptyOtherWord);
        break;
    }

    this.setHandledForm();
  }

  private setAllWordTypes(): void {
    this.allWordTypes = allWordTypes;
    this.allWordTypeMessages = allWordTypes.map((wordType: WordType) => wordType.slice(0, 1).toUpperCase() + wordType.slice(1));
  }
}
