import { FormControl } from '@angular/forms';
import { VerbType } from '../verb-type';
import { NounType } from '../noun-type';

export interface WordTranslationFormGroup {
  useCase: FormControl<string>;
  context: FormControl<string>;
  translation: FormControl<string>;
  synonyms: FormControl<string[]>;
}

export interface VerbTranslationFormGroup extends WordTranslationFormGroup {
  contextWordType: FormControl<VerbType>;
}

export interface NounTranslationFormGroup extends WordTranslationFormGroup {
  contextWordType: FormControl<NounType>;
}

export type GeneralWordTranslationFormGroup = WordTranslationFormGroup | VerbTranslationFormGroup | NounTranslationFormGroup;
