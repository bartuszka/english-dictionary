import { Word } from '../../../../backend/src/models/words/general-word';
import { WordType } from '../../../../backend/src/models/words/word-type';
import { VerbType } from '../../../../backend/src/models/words/verb-type';
import { NounType } from '../../../../backend/src/models/words/noun-type';
import { HttpErrorResponse } from '@angular/common/http';
import { Verb } from '../../words/models/verb';
import { Noun } from '../../words/models/noun';
import { OtherWord } from '../../words/models/other-word';

const _testWords: Word[] = [
  {
    id: '2035923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '123133453',
    wordType: WordType.OTHER,
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    translations: [
      {
        useCase: ' [+ of beeing/doing sth]:',
        context: 'She never achieved her ambition of becoming a famous writer.',
        translation: 'Ambicja',
      },
      {
        context: 'motivated by personal ambition',
        translation: 'Ambicjonalność',
      },
    ]
  },
  {
    id: '2035923527',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562049348',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2035923529',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '162049346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '1035923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '462049346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2036923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562049746',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2095923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '563049346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2035926525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562049646',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2035923520',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562043546',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2038923525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562038346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2035950525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '519049346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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
  },
  {
    id: '2035972525',
    wordType: WordType.VERB,
    verbTypes: [VerbType.TRANSITIVE, VerbType.INTRANSITIVE],
    name: 'exceed',
    pronunciation: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormPronunciation: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormPronunciation: 'ɪkˈsiːdid',
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
    id: '562199346',
    wordType: WordType.NOUN,
    nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
    name: 'ambition',
    pronunciation: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormPronunciation: 'æmˈbɪʃənz',
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

const _testNewWord: Word = {
  id: '9999999999',
  wordType: WordType.NOUN,
  nounTypes: [NounType.COUNTABLE],
  name: 'added-test-word',
  pronunciation: 'æmˈbɪʃən',
  pluralForm: 'added-test-words',
  pluralFormPronunciation: 'æmˈbɪʃənz',
  translations: [
    {
      contextWordType: NounType.COUNTABLE,
      useCase: ' [+ of beeing/doing sth]:',
      context: 'Added test word context',
      translation: 'Added test word translation',
    },
    {
      contextWordType: NounType.UNCOUNTABLE,
      context: 'Added test word second context',
      translation: 'Added test word second translation',
    },
  ]
}

const _testEditedWord: Word = {
  id: '562199346',
  wordType: WordType.NOUN,
  nounTypes: [NounType.COUNTABLE, NounType.UNCOUNTABLE],
  name: 'ambition edited',
  pronunciation: 'æmˈbɪʃən',
  pluralForm: 'ambitions edited',
  pluralFormPronunciation: 'æmˈbɪʃənz',
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

export function getExistingEditedWord(word: Word): Word {
  const existingWordIndex = _testWords.findIndex((testWord: Word) => testWord.id === _testEditedWord.id);
  _testWords[existingWordIndex] = word;
  return getDeepCopy(_testWords[existingWordIndex]);
}

export function getTestWords(): Word[] {
  return getDeepCopy(_testWords);
}

export function getTestNewWord(): Word {
  return getDeepCopy(_testNewWord);
}

export function getTestEditedWord(): Word {
  return getDeepCopy(_testEditedWord);
}

export function getTestHttpError(message: string, url: string): HttpErrorResponse {
  return new HttpErrorResponse({
    status: 500, error: { message }, url, statusText: 'status text'
  });
}

export function getTestVerb(): Verb {
  return getTestWords()[0] as Verb;
}

export function getTestNoun(): Noun {
  return getTestWords()[1] as Noun;
}

export function getTestOtherWord(): OtherWord {
  return getTestWords()[2] as OtherWord;
}

export function getTestWordsAfterEdition(word: Word): Word[] {
  const updatedTestWords: Word[] = [..._testWords];
  const existingWordIndex = updatedTestWords.findIndex((testWord: Word) => testWord.id === _testEditedWord.id);
  updatedTestWords[existingWordIndex] = word;
  return updatedTestWords;
}

function getDeepCopy<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}
