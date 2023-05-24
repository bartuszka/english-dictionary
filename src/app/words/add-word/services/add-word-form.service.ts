import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

import { WordType } from '../../models/word-type';
import { NounTranslationExample, VerbTranslationExample, WordTranslationExample } from '../../models/translation-example';
import { VerbType } from '../../models/verb-type';
import { NounType } from '../../models/noun-type';
import { Verb } from '../../models/verb';
import { Noun } from '../../models/noun';
import { OtherWord } from '../../models/other-word';
import {
  NounTranslationFormGroup,
  VerbTranslationFormGroup,
  WordTranslationFormGroup
} from '../../models/add-word-form/translation-form.models';
import { NounForm, OtherWordForm, VerbForm } from '../../models/add-word-form/word-form.models';

@Injectable()
export class AddWordFormService {

  public createVerbForm(editedVerb: Verb): FormGroup<VerbForm> {
    return new FormGroup({
      id: new FormControl<string>(editedVerb.id || new Date().getTime().toString()),
      name: new FormControl<string>(editedVerb.name || null),
      pronunciation: new FormControl<string>(editedVerb.pronunciation || null),
      wordType: new FormControl<WordType.VERB>(editedVerb.wordType || null),
      verbTypes: new FormControl<VerbType[]>(editedVerb.verbTypes || null),
      secondForm: new FormControl<string>(editedVerb.secondForm || null),
      secondFormPronunciation: new FormControl<string>(editedVerb.secondFormPronunciation || null),
      thirdForm: new FormControl<string>(editedVerb.thirdForm || null),
      thirdFormPronunciation: new FormControl<string>(editedVerb.thirdFormPronunciation || null),
    });
  }

  public createNounForm(editedNoun: Noun): FormGroup<NounForm> {
    return new FormGroup({
      id: new FormControl<string>(editedNoun.id || new Date().getTime().toString()),
      name: new FormControl<string>(editedNoun.name || null),
      pronunciation: new FormControl<string>(editedNoun.pronunciation || null),
      wordType: new FormControl<WordType.NOUN>(editedNoun.wordType || null),
      nounTypes: new FormControl<NounType[]>(editedNoun.nounTypes || null),
      pluralForm: new FormControl<string>(editedNoun.pluralForm || null),
      pluralFormPronunciation: new FormControl<string>(editedNoun.pluralFormPronunciation || null),
    });
  }

  public createOtherWordForm(editedOtherWord: OtherWord): FormGroup<OtherWordForm> {
    return new FormGroup({
      id: new FormControl<string>(editedOtherWord.id || new Date().getTime().toString()),
      name: new FormControl<string>(editedOtherWord.name || null),
      pronunciation: new FormControl<string>(editedOtherWord.pronunciation || null),
      wordType: new FormControl<WordType.OTHER>(editedOtherWord.wordType || null),
    });
  }

  public createVerbTranslationsFormArray(word: Verb): FormArray<FormGroup<VerbTranslationFormGroup>> {
    const translations: FormGroup<VerbTranslationFormGroup>[] = word.translations.map(
      (translation: VerbTranslationExample) => this.getVerbTransitionExampleFormGroup(translation)
    );

    return new FormArray(translations);
  }

  public createNounTranslationsFormArray(word: Noun): FormArray<FormGroup<NounTranslationFormGroup>> {
    const translations: FormGroup<NounTranslationFormGroup>[] = word.translations.map(
      (translation: NounTranslationExample) => this.getNounTransitionExampleFormGroup(translation)
    );

    return new FormArray(translations);
  }

  public createOtherWordTranslationsFormArray(word: OtherWord): FormArray<FormGroup<WordTranslationFormGroup>> {
    const translations: FormGroup<WordTranslationFormGroup>[] = word.translations.map(
      (translation: WordTranslationExample) => this.getOtherWordTransitionExampleFormGroup(translation)
    );

    return new FormArray(translations);
  }

  public getVerbTransitionExampleFormGroup(translation: VerbTranslationExample): FormGroup<VerbTranslationFormGroup> {
    return new FormGroup<VerbTranslationFormGroup>({
      contextWordType: new FormControl<VerbType>(translation.contextWordType),
      ...this.getWordTransitionExampleFormFields(translation),
    });
  }

  public getNounTransitionExampleFormGroup(translation: NounTranslationExample): FormGroup<NounTranslationFormGroup> {
    return new FormGroup<NounTranslationFormGroup>({
      contextWordType: new FormControl<NounType>(translation.contextWordType),
      ...this.getWordTransitionExampleFormFields(translation),
    });
  }

  public getOtherWordTransitionExampleFormGroup(translation: WordTranslationExample): FormGroup<WordTranslationFormGroup> {
    return new FormGroup<WordTranslationFormGroup>({
      ...this.getWordTransitionExampleFormFields(translation),
    });
  }

  private getWordTransitionExampleFormFields(translation: WordTranslationExample): WordTranslationFormGroup {
    return {
      context: new FormControl<string>(translation.context),
      translation: new FormControl<string>(translation.translation),
      useCase: new FormControl<string>(translation.useCase),
      synonyms: new FormControl<string[]>(translation.synonyms || []),
    };
  }
}
