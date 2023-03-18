import { Word } from './word';
import { VerbType } from './verb-type';

export interface Verb extends Word {
  verbTypes: VerbType[];
  secondForm: string;
  secondFormSpelling: string;
  thirdForm: string;
  thirdFormSpelling: string;
}
