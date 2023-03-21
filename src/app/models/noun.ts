import { NounType } from './noun-type';
import { GeneralWord } from './word';
import { WordType } from './word-type';

export interface Noun extends GeneralWord {
  wordType: WordType.NOUN,
  nounTypes: NounType[],
  pluralForm: string,
  pluralFormSpelling: string
}
