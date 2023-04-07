import { Pipe, PipeTransform } from '@angular/core';
import { Word } from '../models/general-word';
import { Verb } from '../models/verb';

@Pipe({
  name: 'verbType'
})
export class VerbTypePipe implements PipeTransform {
  transform(word: Word): Verb {
    return word as Verb
  }
}
