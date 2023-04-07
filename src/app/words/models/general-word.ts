import { Verb } from './verb';
import { Noun } from './noun';
import { OtherWord } from './other-word';

export interface GeneralWord {
  id: string;
  name: string,
  pronunciation: string,
}

export type Word = Verb | Noun | OtherWord;
