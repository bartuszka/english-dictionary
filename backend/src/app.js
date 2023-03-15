/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
const express = require('express');

const app = express();

const words = [
  {
    type: 'VERB',
    name: 'exceed',
    spelling: 'ɪkˈsiːd',
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
    type: 'NOUN',
    name: 'ambition',
    spelling: 'æmˈbɪʃən',
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
