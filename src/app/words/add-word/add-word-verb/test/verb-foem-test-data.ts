import { FormControl, FormGroup } from '@angular/forms';
import { VerbForm } from '../../../models/add-word-form/word-form.models';
import { WordType } from '../../../models/word-type';
import { VerbType } from '../../../models/verb-type';


export const testVerbForm: FormGroup<VerbForm> = new FormGroup<VerbForm>({
  id: new FormControl('123'),
  wordType: new FormControl(WordType.VERB),
  name: new FormControl('verb 1'),
  verbTypes: new FormControl([VerbType.INTRANSITIVE, VerbType.TRANSITIVE]),
  secondForm: new FormControl('verbed 1'),
  thirdForm: new FormControl('verbed 1'),
  pronunciation: new FormControl('verb 1'),
  secondFormPronunciation: new FormControl('verbed 1'),
  thirdFormPronunciation: new FormControl('verbed 1'),
});
