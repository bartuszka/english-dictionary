import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  GeneralWordTranslationFormGroup,
  NounTranslationFormGroup,
  VerbTranslationFormGroup,
  WordTranslationFormGroup
} from '../../models/add-word-form/translation-form.models';

@Pipe({
  name: 'ngIterable'
})
export class NgIterablePipe implements PipeTransform {
  transform(value:
              FormGroup<WordTranslationFormGroup>[]
              | FormGroup<NounTranslationFormGroup>[]
              | FormGroup<VerbTranslationFormGroup>[]
  ): FormGroup<GeneralWordTranslationFormGroup>[] {
    return value as FormGroup<GeneralWordTranslationFormGroup>[];
  }
}
