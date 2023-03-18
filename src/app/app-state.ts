import { WordsState } from './models/words-state';
import { ActionReducerMap } from '@ngrx/store';
import { wordsReducer } from './search-results/search-results-store/words.reducer';

export interface AppState {
  wordsState: WordsState
}

/* eslint @typescript-eslint/no-explicit-any: off */
export const reducers: ActionReducerMap<AppState, any> = {
  wordsState: wordsReducer
}
