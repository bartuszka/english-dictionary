import { Component, OnInit } from '@angular/core';
import { WordType } from '../models/word-type';
import { NounType } from '../models/noun-type';
import { WordsStateService } from '../services/words-state.service';
import { Observable, take } from 'rxjs';
import { Word } from '../models/word';
import { ErrorHandlingService } from '../../error/error-handling.service';
import { Deactivable } from '../../shared/directives/deactivable';
import { WarningMessages } from '../../error/models/warning-messages';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent extends Deactivable implements OnInit {
  public editedWord: Word;

  constructor(private wordsStateService: WordsStateService, private errorHandlingService: ErrorHandlingService) {
    super();
  }

  public ngOnInit(): void {
    this.wordsStateService.editedWord$
      .pipe(take(1))
      .subscribe(editedWord => this.editedWord = editedWord);
  }

  public confirmDeactivate(): Observable<boolean> {
    this.errorHandlingService.showWarning(
      WarningMessages.ADD_WORD_LEAVE_CONFIRM,
      () => {
        this.wordsStateService.dispatchSetEditWord(null);
        this.canDeactivateSubject$.next(true);
      }
    );
    return this.canDeactivate$;
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
