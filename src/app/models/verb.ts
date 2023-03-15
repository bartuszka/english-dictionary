import { Word } from './word';
import { VerbType } from './verb-type';

export interface Verb extends Word {
  verbTypes: VerbType[]
}
