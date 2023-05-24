import { Verb } from '../../models/verb';
import { WordType } from '../../models/word-type';
import { emptyOtherWord } from './empty-other-word';

export const emptyVerb: Verb = {
  ...emptyOtherWord,
  wordType: WordType.VERB,
  verbTypes: [],
  secondForm: null,
  secondFormPronunciation: null,
  thirdForm: null,
  thirdFormPronunciation: null,
  translations: [],
};
