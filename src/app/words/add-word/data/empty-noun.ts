import { Noun } from '../../models/noun';
import { WordType } from '../../models/word-type';
import { emptyOtherWord } from './empty-other-word';

export const emptyNoun: Noun = {
  ...emptyOtherWord,
  wordType: WordType.NOUN,
  nounTypes: [],
  translations: []
}
