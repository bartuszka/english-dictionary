import { FormControl, FormGroup } from '@angular/forms';
import { NounForm } from '../../../../models/add-word-form/word-form.models';
import { WordType } from '../../../../models/word-type';
import { NounType } from '../../../../models/noun-type';

export const testNounForm: FormGroup<NounForm> = new FormGroup<NounForm>({
  id: new FormControl('123'),
  wordType: new FormControl(WordType.NOUN),
  name: new FormControl('name 1'),
  nounTypes: new FormControl([NounType.COUNTABLE, NounType.UNCOUNTABLE]),
  pluralForm: new FormControl('names 1'),
  pronunciation: new FormControl('name 1'),
  pluralFormPronunciation: new FormControl('names 1'),
});
