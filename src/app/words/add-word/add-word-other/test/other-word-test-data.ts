import { FormControl, FormGroup } from '@angular/forms';

import { OtherWordForm } from '../../../models/add-word-form/word-form.models';
import { WordType } from '../../../models/word-type';


export const testOtherWordForm: FormGroup<OtherWordForm> = new FormGroup<OtherWordForm>({
  id: new FormControl('123'),
  wordType: new FormControl(WordType.OTHER),
  name: new FormControl('other word 1'),
  pronunciation: new FormControl('other word 1'),
});
