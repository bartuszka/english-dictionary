import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { WordType } from '../word-type';
import { VerbType } from '../verb-type';
import {
  NounTranslationFormGroup,
  VerbTranslationFormGroup,
  WordTranslationFormGroup
} from './translation-form-group';
import { NounType } from '../noun-type';

interface WordFormBase {
  id: FormControl<string>;
  name: FormControl<string>;
  pronunciation: FormControl<string>;
  wordType: FormControl<WordType>;
}

export type GeneralTranslationsFormArrayType = FormArray<FormGroup<WordTranslationFormGroup>>
  | FormArray<FormGroup<NounTranslationFormGroup>>
  | FormArray<FormGroup<VerbTranslationFormGroup>>;

export interface WordForm extends WordFormBase {
  verbTypes?: FormControl<VerbType[]>;
  nounTypes?: FormControl<NounType[]>;
  secondForm?: FormControl<string>;
  secondFormPronunciation?: FormControl<string>;
  thirdForm?: FormControl<string>;
  thirdFormPronunciation?: FormControl<string>;
  pluralForm?: FormControl<string>;
  pluralFormPronunciation?: FormControl<string>;
  translations: GeneralTranslationsFormArrayType;
}

export interface VerbForm extends WordFormBase {
  wordType: FormControl<WordType.VERB>,
  verbTypes?: FormControl<VerbType[]>;
  secondForm?: FormControl<string>;
  secondFormPronunciation?: FormControl<string>;
  thirdForm?: FormControl<string>;
  thirdFormPronunciation?: FormControl<string>;
  translations: FormArray<FormGroup<VerbTranslationFormGroup>>;
}

export interface NounForm extends WordFormBase {
  wordType: FormControl<WordType.NOUN>,
  nounTypes: FormControl<NounType[]>;
  pluralForm?: FormControl<string>;
  pluralFormPronunciation?: FormControl<string>;
  translations: FormArray<FormGroup<NounTranslationFormGroup>>;
}

export interface OtherForm extends WordFormBase {
  wordType: FormControl<WordType.OTHER>,
  translations: FormArray<FormGroup<WordTranslationFormGroup>>;
}
