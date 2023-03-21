import { GeneralWord } from './word';
import { WordType } from './word-type';

export interface OtherWord extends GeneralWord {
  wordType: WordType.OTHER
}
