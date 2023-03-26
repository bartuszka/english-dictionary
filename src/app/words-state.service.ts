import { Injectable } from '@angular/core';

import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WordsActions from './search-results/search-results-store/words.actions';
import { WordsState } from './models/words-state';
import { Word } from './models/word';
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

  public fetchWords(): Observable<Word[]> {
    return this.wordsServerService.fetchWords().pipe(
      tap((words: Word[]) => this.store.dispatch(new WordsActions.AddWords(words)))
    );
  }

  public addWord(word: Word): void {
    this.wordsServerService.addWord(word).subscribe(data => console.log(data));
  }

  private setWordsStream(): void {
    this.words$ = this.store.select('wordsState').pipe(
      map((wordsState: WordsState) => wordsState.searchedWords)
    );
  }
}
