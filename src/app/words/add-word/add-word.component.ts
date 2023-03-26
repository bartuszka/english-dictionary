import { Component, OnInit } from '@angular/core';
import { WordType } from '../models/word-type';
import { NounType } from '../models/noun-type';
import { WordsStateService } from '../services/words-state.service';
import { take } from 'rxjs';
import { Word } from '../models/word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  public editedWord: Word;

  constructor(private wordsStateService: WordsStateService) {}

  public ngOnInit(): void {
    this.wordsStateService.editedWord$
      .pipe(take(1))
      .subscribe(editedWord => this.editedWord = editedWord);
  }

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
    const editedWord: Word = {
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
    }

    this.wordsStateService.dispatchEditWord(editedWord).subscribe();
  }
}
