import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { WordType } from '../word-type';
import { VerbType } from '../verb-type';
import { NounType } from '../noun-type';
import {
  NounTranslationFormGroup,
  VerbTranslationFormGroup,
  WordTranslationFormGroup
} from './translation-form.models';

export type GeneralTranslationsFormArrayType = FormArray<FormGroup<WordTranslationFormGroup>>
  | FormArray<FormGroup<NounTranslationFormGroup>>
  | FormArray<FormGroup<VerbTranslationFormGroup>>;

export type GeneralWordWithTranslationsFormType = FormGroup<VerbWithTranslationsForm>
  | FormGroup<NounWithTranslationsForm>
  | FormGroup<OtherWordWithTranslationsForm>;

export interface WordFormBase {
  id: FormControl<string>;
  name: FormControl<string>;
  pronunciation: FormControl<string>;
  wordType: FormControl<WordType>;
}

export interface VerbForm extends WordFormBase {
  wordType: FormControl<WordType.VERB>,
  verbTypes: FormControl<VerbType[]>;
  secondForm: FormControl<string>;
  secondFormPronunciation: FormControl<string>;
  thirdForm: FormControl<string>;
  thirdFormPronunciation: FormControl<string>;
}

export interface NounForm extends WordFormBase {
  wordType: FormControl<WordType.NOUN>,
  nounTypes: FormControl<NounType[]>;
  pluralForm: FormControl<string>;
  pluralFormPronunciation: FormControl<string>;
}

export interface OtherWordForm extends WordFormBase {
  wordType: FormControl<WordType.OTHER>,
}

export interface VerbWithTranslationsForm {
  wordDataForm: FormGroup<VerbForm>;
  translations: FormArray<FormGroup<VerbTranslationFormGroup>>;
}

export interface NounWithTranslationsForm {
  wordDataForm: FormGroup<NounForm>;
  translations: FormArray<FormGroup<NounTranslationFormGroup>>;
}

export interface OtherWordWithTranslationsForm {
  wordDataForm: FormGroup<OtherWordForm>;
  translations: FormArray<FormGroup<WordTranslationFormGroup>>;
}
