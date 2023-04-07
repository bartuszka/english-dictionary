import { GeneralWord } from './general-word';
import { VerbType } from './verb-type';
import { WordType } from './word-type';
import { VerbTranslationExample } from './translation-example';

export interface Verb extends GeneralWord {
  wordType: WordType.VERB,
  verbTypes: VerbType[];
  secondForm?: string;
  secondFormPronunciation?: string;
  thirdForm?: string;
  thirdFormPronunciation?: string;
  translations: VerbTranslationExample[];
}
