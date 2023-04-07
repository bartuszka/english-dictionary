import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Word } from '../models/general-word';
import { WordType } from '../models/word-type';
import { NounTranslationFormGroup, VerbTranslationFormGroup, WordTranslationFormGroup } from '../models/add-word-form/translation-form-group';
import { NounTranslationExample, VerbTranslationExample, WordTranslationExample } from '../models/translation-example';
import { VerbType } from '../models/verb-type';
import { NounType } from '../models/noun-type';
import { GeneralTranslationsFormArrayType, WordForm } from '../models/add-word-form/word-form';

@Injectable()
export class AddWordFormService {
  public createAddWordForm(word: Word): FormGroup<WordForm> {
    return this.buildForm(word);
  }

  private buildForm(editedWord: Word): FormGroup<WordForm> {
    const addWordForm: FormGroup<WordForm> = new FormGroup({
      id: new FormControl<string>(editedWord?.id || new Date().getTime().toString()),
      name: new FormControl<string>(editedWord?.name || null),
      pronunciation: new FormControl<string>(editedWord?.pronunciation || null),
      wordType: new FormControl<WordType>(editedWord.wordType),
      translations: this.createTranslationExampleFormArray(editedWord),
    });

    this.addWordTypesToForm(editedWord, addWordForm);
    this.addWordFormsToForm(editedWord, addWordForm);

    return addWordForm;
  }

  private addWordTypesToForm(word: Word, formGroup: FormGroup<WordForm>): void {
    switch (word.wordType) {
      case WordType.VERB:
        formGroup.addControl('verbTypes', new FormControl<VerbType[]>(word.verbTypes));
        break;
      case WordType.NOUN:
        formGroup.addControl('nounTypes', new FormControl<NounType[]>(word.nounTypes));
        break;
      default:
        // DON'T ADD ANY FIELDS
        break;
    }
  }

  private addWordFormsToForm(word: Word, formGroup: FormGroup<WordForm>): void {
    switch (word.wordType) {
      case WordType.VERB:
        formGroup.addControl('secondForm', new FormControl<string>(word.secondForm));
        formGroup.addControl('secondFormPronunciation', new FormControl<string>(word.secondFormPronunciation));
        formGroup.addControl('thirdForm', new FormControl<string>(word.thirdForm));
        formGroup.addControl('thirdFormPronunciation', new FormControl<string>(word.thirdFormPronunciation));
        break;

      case WordType.NOUN:
        formGroup.addControl('pluralForm', new FormControl<string>(word.pluralForm));
        formGroup.addControl('pluralFormPronunciation', new FormControl<string>(word.pluralFormPronunciation));
        break;

      default:
        // DON'T ADD ANY FIELDS
        break;
    }
  }

  private createTranslationExampleFormArray(word: Word): GeneralTranslationsFormArrayType {
    switch (word.wordType) {
      case WordType.VERB: {
        const verbTranslations: FormGroup<VerbTranslationFormGroup>[] = word.translations.map(
          (translation: VerbTranslationExample) =>
            new FormGroup<VerbTranslationFormGroup>({
              contextWordType: new FormControl<VerbType>(translation.contextWordType),
              ...this.getWordTransitionExampleGeneralControls(translation),
            }),
        );

        return new FormArray(verbTranslations);
      }
      case WordType.NOUN: {
        const nounTranslations: FormGroup<NounTranslationFormGroup>[] = word.translations.map(
          (translation: NounTranslationExample) =>
            new FormGroup<NounTranslationFormGroup>({
              contextWordType: new FormControl<NounType>(translation.contextWordType),
              ...this.getWordTransitionExampleGeneralControls(translation),
            }),
        );

        return new FormArray(nounTranslations);
      }
      default: {
        const wordTranslations: FormGroup<WordTranslationFormGroup>[] = word.translations.map(
          (translation: WordTranslationExample) =>
            new FormGroup<WordTranslationFormGroup>({
              ...this.getWordTransitionExampleGeneralControls(translation),
            }),
        );

        return new FormArray(wordTranslations);
      }
    }
  }

  private getWordTransitionExampleGeneralControls(translation: WordTranslationExample): WordTranslationFormGroup {
    return {
      context: new FormControl<string>(translation.context),
      translation: new FormControl<string>(translation.translation),
      useCase: new FormControl<string>(translation.useCase),
      synonyms: new FormControl<string[]>(translation.synonyms),
    };
  }
}
