import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WordsActions from '../search-results/search-results-store/words.actions';
import { WordsState } from '../models/words-state';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  public words$: Observable<Word[]>;

  constructor(
    public httpClient: HttpClient,
    private store: Store<{ wordsState: WordsState }>,
  ) {
    this.setWordsStream();
  }

  public fetchWords(): Observable<Word[]> {
    return this.httpClient.get<Word[]>('words').pipe(
      tap((words: Word[]) => this.store.dispatch(new WordsActions.AddWords(words)))
    );
  }

  private setWordsStream(): void {
    this.words$ = this.store.select('wordsState').pipe(
      map((wordsState: WordsState) => wordsState.searchedWords)
    );
  }
}
