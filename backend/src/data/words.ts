import { Word } from '../models/words/word';
import { WordType } from '../models/words/word-type';
import { VerbType } from '../models/words/verb-type';
import { NounType } from '../models/words/noun-type';

export const words: Word[] = [
  {
    id: '2035923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    spelling: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormSpelling: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormSpelling: 'ɪkˈsiːdid',
    translations: [
      {
        contextWordType: VerbType.TRANSITIVE,
        useCase: '[+ sth]:',
        context: 'We have exceeded the available limit.',
        translation: 'Przekroczyć, Wyjść poza',
        synonyms: ['overstep', 'cross']
      },
      {
        contextWordType: VerbType.INTRANSITIVE,
        context: 'Do not exceed!',
        translation: 'Przekroczyć się',
      },
    ]
  },
  {
    id: '562049346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    spelling: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormSpelling: 'æmˈbɪʃənz',
    translations: [
      {
        contextWordType: NounType.COUNTABLE,
        useCase: ' [+ of beeing/doing sth]:',
        context: 'She never achieved her ambition of becoming a famous writer.',
        translation: 'Ambicja',
      },
      {
        contextWordType: NounType.UNCOUNTABLE,
        context: 'motivated by personal ambition',
        translation: 'Ambicjonalność',
      },
    ]
  }
];
