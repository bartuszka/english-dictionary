import { Injectable } from '@angular/core';

import { map, Observable, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import { WordsState } from '../models/words-state';
import { Word } from '../models/general-word';
import { WordsServerService } from './words-server.service';
import { AppState } from '../../app-state';
import { addWords } from '../word-store/words.actions';

@Injectable({
  providedIn: 'root'
})
export class WordsStateService {
  public words$: Observable<Word[]>;
  public editedWord$: Observable<Word>;

  constructor(
    private store: Store<AppState>,
    private wordsServerService: WordsServerService
  ) {
    this.setWordsStream();
    this.setEditedWordStream();
  }

  public initializeGetWords(): Observable<Word[]> {
    return this.words$.pipe(
      switchMap((words: Word[]) => {
        return words ? this.words$ : this.dispatchGetWords();
      }),
      take(1)
    )
  }

  public dispatchGetWords(): Observable<Word[]> {
    return this.wordsServerService.fetchWords().pipe(
      // tap((words: Word[]) => this.store.dispatch(new WordsActions.AddWords(words)))
      tap((words: Word[]) => this.store.dispatch(addWords({ words })))
    );
  }

  // public dispatchAddWord(word: Word): Observable<Word> {
  //   return this.wordsServerService.addWord(word).pipe(
  //     tap((word: Word) => this.store.dispatch(new WordsActions.AddWord(word)))
  //   );
  // }
  //
  // public dispatchEditWord(word: Word): Observable<Word> {
  //   return this.wordsServerService.editWord(word).pipe(
  //     tap((word: Word) => this.store.dispatch(new WordsActions.EditWord(word)))
  //   );
  // }
  //
  // public dispatchSetEditWord(word: Word): void {
  //   this.store.dispatch(new WordsActions.SetEditedWord(word));
  // }

  public getWordFromState(wordIndex: string): Observable<Word> {
    return this.store.select('wordsState').pipe(
      map((wordsState: WordsState) =>
        wordsState.searchedWords.find((word: Word) => word.id === wordIndex)),
      take(1)
    )
  }

  private setWordsStream(): void {
    this.words$ = this.store.select('wordsState').pipe(
      map((wordsState: WordsState) => wordsState.searchedWords)
    );
  }

  private setEditedWordStream(): void {
    this.editedWord$ = this.store.select('wordsState').pipe(
      map((wordsState: WordsState) => wordsState.editedWord),
    );
  }
}
