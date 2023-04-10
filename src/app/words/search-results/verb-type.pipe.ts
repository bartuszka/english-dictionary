import { Pipe, PipeTransform } from '@angular/core';
import { Word } from '../models/general-word';
import { Verb } from '../models/verb';
import { WordType } from '../models/word-type';

@Pipe({
  name: 'verbType'
})
export class VerbTypePipe implements PipeTransform {
  transform(word: Word): Verb {
    return word.wordType === WordType.VERB ? word as Verb : null;
  }
}
