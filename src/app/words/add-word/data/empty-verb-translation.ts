import { VerbTranslationExample } from '../../models/translation-example';
import { emptyOtherWordTranslation } from './empty-other-word-translation';
import { VerbType } from '../../models/verb-type';

export const emptyVerbTranslation: VerbTranslationExample = {
  contextWordType: VerbType.TRANSITIVE,
  ...emptyOtherWordTranslation,
}
