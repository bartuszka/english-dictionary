"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.words = void 0;
const word_type_1 = require("../models/words/word-type");
const verb_type_1 = require("../models/words/verb-type");
const noun_type_1 = require("../models/words/noun-type");
exports.words = [
    {
        id: '2035923525',
        wordType: word_type_1.WordType.VERB,
        verbTypes: [verb_type_1.VerbType.TRANSITIVE, verb_type_1.VerbType.INTRANSITIVE],
        name: 'exceed',
        spelling: 'ɪkˈsiːd',
        secondForm: 'exceeded',
        secondFormSpelling: 'ɪkˈsiːdid',
        thirdForm: 'exceeded',
        thirdFormSpelling: 'ɪkˈsiːdid',
        translations: [
            {
                contextWordType: verb_type_1.VerbType.TRANSITIVE,
                useCase: '[+ sth]:',
                context: 'We have exceeded the available limit.',
                translation: 'Przekroczyć, Wyjść poza',
                synonyms: ['overstep', 'cross']
            },
            {
                contextWordType: verb_type_1.VerbType.INTRANSITIVE,
                context: 'Do not exceed!',
                translation: 'Przekroczyć się',
            },
        ]
    },
    {
        id: '562049346',
        wordType: word_type_1.WordType.NOUN,
        nounTypes: [noun_type_1.NounType.COUNTABLE, noun_type_1.NounType.UNCOUNTABLE],
        name: 'ambition',
        spelling: 'æmˈbɪʃən',
        pluralForm: 'ambitions',
        pluralFormSpelling: 'æmˈbɪʃənz',
        translations: [
            {
                contextWordType: noun_type_1.NounType.COUNTABLE,
                useCase: ' [+ of beeing/doing sth]:',
                context: 'She never achieved her ambition of becoming a famous writer.',
                translation: 'Ambicja',
            },
            {
                contextWordType: noun_type_1.NounType.UNCOUNTABLE,
                context: 'motivated by personal ambition',
                translation: 'Ambicjonalność',
            },
        ]
    }
];
