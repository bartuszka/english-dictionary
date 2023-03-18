import * as SearchResultActions from './words.actions';

import { WordsState } from '../../models/words-state';

const initialState: WordsState = {
  searchedWords: null
}

export function wordsReducer(state: WordsState = initialState, action: SearchResultActions.AddWords): WordsState {
  switch (action.type) {
  case SearchResultActions.ADD_WORDS:
    return {
      ...state,
      searchedWords: [...action.payload]
    }
  default:
    return { ...state }
  }
}
