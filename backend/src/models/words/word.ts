import { TranslationExample } from './translation-example';
import { Verb } from './verb';
import { Noun } from './noun';
import { OtherWord } from './other-word';

export interface GeneralWord {
  id: string;
  name: string,
  spelling: string,
  translations: TranslationExample[]
}

export type Word = Verb | Noun | OtherWord;
