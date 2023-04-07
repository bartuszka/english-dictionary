import { Injectable } from '@angular/core';

import { map, Observable, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WordsActions from '../word-store/words.actions';
import { WordsState } from '../models/words-state';
import { Word } from '../models/general-word';
import { WordsServerService } from './words-server.service';
import { AppState } from '../../app-state';

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
    this.editedWord$.subscribe(data => console.log(data))
  }

  public initializeGetWords(): Observable<Word[]> {
    return this.words$.pipe(
      take(1),
      switchMap((words: Word[]) => {
        return words ? this.words$ : this.dispatchGetWords()
      })
    )
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

  public dispatchSetEditWord(word: Word): void {
    this.store.dispatch(new WordsActions.SetEditedWord(word));
  }

  public getWordFromState(wordIndex: string): Observable<Word> {
    return this.words$.pipe(
      map(
        (words: Word[]) => words.find((word: Word) => word.id === wordIndex)
      )
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
