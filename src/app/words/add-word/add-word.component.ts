import { Component } from '@angular/core';
import { WordType } from '../../models/word-type';
import { NounType } from '../../models/noun-type';
import { WordsStateService } from '../services/words-state.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {

  constructor(private wordsStateService: WordsStateService) {}

  public backendTest() {
    this.wordsStateService.dispatchAddWord({
      id: '638349060',
      wordType: WordType.NOUN,
      nounTypes: [NounType.COUNTABLE],
      name: 'puppy',
      spelling: 'æmˈbɪʃən',
      pluralForm: 'puppies',
      pluralFormSpelling: 'æmˈbɪʃənz',
      translations: [
        {
          contextWordType: NounType.COUNTABLE,
          useCase: ' [+ of beeing/doing sth]:',
          context: 'She has a lovely puppy. Hasn\'t she?',
          translation: 'Szczeniak',
        },
        {
          contextWordType: NounType.UNCOUNTABLE,
          context: 'motivated by personal ambition',
          translation: 'Szczeniakowość',
        },
      ]
    }).subscribe();
  }

  public backendEditTest() {
    this.wordsStateService.dispatchEditWord({
      id: '638349060',
      wordType: WordType.NOUN,
      nounTypes: [NounType.COUNTABLE],
      name: 'DUUUPPYYYY',
      spelling: 'æmˈbɪʃən',
      pluralForm: 'puppies',
      pluralFormSpelling: 'æmˈbɪʃənz',
      translations: [
        {
          contextWordType: NounType.COUNTABLE,
          useCase: ' [+ of beeing/doing sth]:',
          context: 'She has a lovely puppy. Hasn\'t she?',
          translation: 'Szczeniak',
        },
        {
          contextWordType: NounType.UNCOUNTABLE,
          context: 'motivated by personal ambition',
          translation: 'Szczeniakowość',
        },
      ]
    }).subscribe();
  }
}
