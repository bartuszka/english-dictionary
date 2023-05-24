import { OtherWord } from '../../models/other-word';
import { WordType } from '../../models/word-type';

export const emptyOtherWord: OtherWord = {
  id: Date.now().toString(),
  wordType: WordType.OTHER,
  name: null,
  pronunciation: null,
  translations: []
}
