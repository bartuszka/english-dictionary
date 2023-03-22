import { Pipe, PipeTransform } from '@angular/core';
import { Noun } from '../models/noun';
import { Word } from '../models/word';

@Pipe({
  name: 'nounType'
})
export class NounTypePipe implements PipeTransform {
  transform(word: Word): Noun {
    return word as Noun
  }
}