import { GeneralWord } from './word';
import { VerbType } from './verb-type';
import { WordType } from './word-type';

export interface Verb extends GeneralWord {
  wordType: WordType.VERB,
  verbTypes: VerbType[];
  secondForm: string;
  secondFormSpelling: string;
  thirdForm: string;
  thirdFormSpelling: string;
}
