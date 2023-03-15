import { TranslationExample } from './translation-example';
import { WordType } from './word-type';

export interface Word {
  type: WordType,
  name: string,
  spelling: string,
  translations: TranslationExample[]
}
