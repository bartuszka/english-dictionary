import { NounTranslationExample } from '../../models/translation-example';
import { emptyOtherWordTranslation } from './empty-other-word-translation';
import { NounType } from '../../models/noun-type';

export const emptyNounTranslation: NounTranslationExample = {
  contextWordType: NounType.UNCOUNTABLE,
  ...emptyOtherWordTranslation,
};
