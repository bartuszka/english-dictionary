import { Pipe, PipeTransform } from '@angular/core';
import { VerbType } from '../../words/models/verb-type';
import { NounType } from '../../words/models/noun-type';

@Pipe({
  name: 'wordTypeShortcut'
})
export class WordTypeShortcutPipe implements PipeTransform {
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

