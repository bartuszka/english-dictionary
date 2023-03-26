import { VerbType } from './verb-type';
import { NounType } from './noun-type';

export interface TranslationExample {
  contextWordType?: VerbType | NounType;
  useCase?: string;
  context: string;
  translation: string;
  synonyms?: string[]
}
