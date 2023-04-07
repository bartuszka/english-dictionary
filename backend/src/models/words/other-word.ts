import { GeneralWord } from './general-word';
import { WordType } from './word-type';
import { WordTranslationExample } from './translation-example';

export interface OtherWord extends GeneralWord {
  wordType: WordType.OTHER;
  translations: WordTranslationExample[];
}
