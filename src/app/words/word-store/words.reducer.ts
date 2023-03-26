import * as WordStateActions from './words.actions';

import { WordsState } from '../models/words-state';
import { Word } from '../models/word';

const initialState: WordsState = {
  searchedWords: null,
  editedWord: null
}

export function wordsReducer(state: WordsState = initialState, action: WordStateActions.WordActions): WordsState {
  switch (action.type) {
  case WordStateActions.ADD_WORDS:
    return {
      ...state,
      searchedWords: [...action.payload]
    }
  case WordStateActions.ADD_WORD:
    return {
      ...state,
      searchedWords: [...state.searchedWords, action.payload]
    };

  case WordStateActions.EDIT_WORD: {
    const updatedWords: Word[] = [...state.searchedWords];
    const existingWordIndex: number = updatedWords.findIndex((word: Word) => word.id === action.payload.id);

    if (existingWordIndex !== -1) {
      updatedWords[existingWordIndex] = { ...action.payload }

      return {
        ...state,
        searchedWords: updatedWords
      };
    }

    return { ...state };
  }

  default:
    return { ...state }
  }
}
