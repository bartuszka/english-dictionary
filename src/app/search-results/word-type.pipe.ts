import { Pipe, PipeTransform } from '@angular/core';
import { VerbType } from '../models/verb-type';
import { NounType } from '../models/noun-type';

@Pipe({
  name: 'wordType'
})
export class WordTypePipe implements PipeTransform {
  transform(wordTypes: (VerbType | NounType)[] | string): string {
    if (Array.isArray(wordTypes)) {
      return wordTypes
        .map((wordType: VerbType | NounType) => wordType.charAt(0))
        .join('/');
    } else {
      return wordTypes.charAt(0);
    }
  }
}

