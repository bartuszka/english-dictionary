import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { GeneralWordWithTranslationsFormType } from '../../../models/add-word-form/word-form.models';
import { testVerbForm } from '../../add-word-verb/test/verb-foem-test-data';
import { VerbTranslationFormGroup } from '../../../models/add-word-form/translation-form.models';
import { VerbType } from '../../../models/verb-type';

export const verbWithTransitionsForm: GeneralWordWithTranslationsFormType = new FormGroup({
  wordDataForm: testVerbForm,
  translations: new FormArray<FormGroup<VerbTranslationFormGroup>>([
    new FormGroup<VerbTranslationFormGroup>({
      contextWordType: new FormControl<VerbType>(VerbType.TRANSITIVE),
      useCase: new FormControl<string>('useCase'),
      context: new FormControl<string>('Context'),
      translation: new FormControl<string>('Translation'),
      synonyms: new FormControl<string[]>(['synonym 1', 'synonym 2'])
    })
  ])
});
