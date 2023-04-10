import { Pipe, PipeTransform } from '@angular/core';
import { Noun } from '../models/noun';
import { Word } from '../models/general-word';
import { WordType } from '../models/word-type';

@Pipe({
  name: 'nounType'
})
export class NounTypePipe implements PipeTransform {
  transform(word: Word): Noun {
    return word.wordType === WordType.NOUN ? word as Noun : null;
  }
}
