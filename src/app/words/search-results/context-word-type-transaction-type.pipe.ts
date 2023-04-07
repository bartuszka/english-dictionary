import { Pipe, PipeTransform } from '@angular/core';
import { NounTranslationExample, VerbTranslationExample, WordTranslationExample } from '../models/translation-example';

@Pipe({
  name: 'contextWordTypeTransactionType'
})
export class ContextWordTypeTransactionTypePipe implements PipeTransform {
  transform(translationExample: WordTranslationExample): VerbTranslationExample | NounTranslationExample {
    return translationExample as VerbTranslationExample | NounTranslationExample;
  }
}
