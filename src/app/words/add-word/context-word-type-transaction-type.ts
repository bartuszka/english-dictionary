import { Pipe, PipeTransform } from '@angular/core';

import { FormGroup } from '@angular/forms';
import {
  GeneralWordTranslationFormGroup, NounTranslationFormGroup,
  VerbTranslationFormGroup,
} from '../models/add-word-form/translation-form-group';

@Pipe({
  name: 'contextWordTypeTransactionType'
})
export class ContextWordTypeTransactionType implements PipeTransform {
  public transform(translation: FormGroup<GeneralWordTranslationFormGroup>): FormGroup<VerbTranslationFormGroup | NounTranslationFormGroup> {
    return translation as FormGroup<VerbTranslationFormGroup | NounTranslationFormGroup>;
  }
}
