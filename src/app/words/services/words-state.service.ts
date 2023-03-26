import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WordsActions from '../word-store/words.actions';
import { WordsState } from '../../models/words-state';
import { Word } from '../../models/word';
import { WordsServerService } from './words-server.service';

@Injectable({
  providedIn: 'root'
})
export class WordsStateService {
  public words$: Observable<Word[]>;

  constructor(
    private store: Store<{ wordsState: WordsState }>,
    private wordsServerService: WordsServerService
  ) {
    this.setWordsStream();
  }

  public dispatchGetWords(): Observable<Word[]> {
    return this.wordsServerService.fetchWords().pipe(
      tap((words: Word[]) => this.store.dispatch(new WordsActions.AddWords(words)))
    );
  }

  public dispatchAddWord(word: Word): Observable<Word> {
    return this.wordsServerService.addWord(word).pipe(
      tap((word: Word) => this.store.dispatch(new WordsActions.AddWord(word)))
    );
  }

  public dispatchEditWord(word: Word): Observable<Word> {
    return this.wordsServerService.editWord(word).pipe(
      tap((word: Word) => this.store.dispatch(new WordsActions.EditWord(word)))
    );
  }

  private setWordsStream(): void {
    this.words$ = this.store.select('wordsState').pipe(
      map((wordsState: WordsState) => wordsState.searchedWords)
    );
  }
}
