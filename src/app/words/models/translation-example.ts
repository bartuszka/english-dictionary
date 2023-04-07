import { VerbType } from './verb-type';
import { NounType } from './noun-type';

export interface WordTranslationExample {
  useCase?: string;
  context: string;
  translation: string;
  synonyms?: string[]
}

export interface VerbTranslationExample extends WordTranslationExample {
  contextWordType: VerbType;
}

export interface NounTranslationExample extends WordTranslationExample {
  contextWordType: NounType;
}
