/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X_Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
})

const words = [
  {
    wordType: 'VERB',
    verbTypes: ['TRANSITIVE', 'INTRANSITIVE'],
    name: 'exceed',
    spelling: 'ɪkˈsiːd',
    secondForm: 'exceeded',
    secondFormSpelling: 'ɪkˈsiːdid',
    thirdForm: 'exceeded',
    thirdFormSpelling: 'ɪkˈsiːdid',
    translations: [
      {
        contextWordType: 'TRANSITIVE',
        useCase: '[+ sth]:',
        context: 'We have exceeded the available limit.',
        translation: 'Przekroczyć, Wyjść poza',
        synonyms: ['overstep', 'cross']
      },
      {
        contextWordType: 'INTRANSITIVE',
        context: 'Do not exceed!',
        translation: 'Przekroczyć się',
      },
    ]
  },
  {
    wordType: 'NOUN',
    nounTypes: ['COUNTABLE', 'UNCOUNTABLE'],
    name: 'ambition',
    spelling: 'æmˈbɪʃən',
    pluralForm: 'ambitions',
    pluralFormSpelling: 'æmˈbɪʃənz',
    translations: [
      {
        contextWordType: 'COUNTABLE',
        useCase: ' [+ of beeing/doing sth]:',
        context: 'She never achieved her ambition of becoming a famous writer.',
        translation: 'Ambicja',
      },
      {
        contextWordType: 'UNCOUNTABLE',
        context: 'motivated by personal ambition',
        translation: 'Ambicjonalność',
      },
    ]
  }
];

app.get('/api/words', (req, res) => {
  res.json(words);
})

module.exports = app;
