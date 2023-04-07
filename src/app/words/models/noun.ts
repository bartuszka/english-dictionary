import { NounType } from './noun-type';
import { GeneralWord } from './general-word';
import { WordType } from './word-type';
import { NounTranslationExample } from './translation-example';

export interface Noun extends GeneralWord {
  wordType: WordType.NOUN,
  nounTypes: NounType[],
  pluralForm?: string,
  pluralFormPronunciation?: string;
  translations: NounTranslationExample[];
}
