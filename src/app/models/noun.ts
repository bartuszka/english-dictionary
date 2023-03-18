import { NounType } from './noun-type';
import { Word } from './word';

export interface Noun extends Word {
  nounTypes: NounType[],
  pluralForm: string,
  pluralFormSpelling: string
}
