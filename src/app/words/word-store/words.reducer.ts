import * as WordStateActions from './words.actions';

import { WordsState } from '../models/words-state';
import { Word } from '../models/general-word';
import { createReducer, on } from '@ngrx/store';

const initialState: WordsState = {
  searchedWords: null,
  editedWord: null
}

export const wordsReducer = createReducer(
  initialState,
  on(WordStateActions.addWords, (state: WordsState, { words }) => ({
    ...state,
    searchedWords: [...words]
  })),
  on(WordStateActions.addWord, (state: WordsState, { word }) => ({
    ...state,
    searchedWords: [...state.searchedWords, { ...word }]
  })),
  on(WordStateActions.editWord, (state: WordsState, { word }) => {
    const updatedWords: Word[] = [...state.searchedWords];
    const existingWordIndex: number = updatedWords.findIndex((existingWord: Word) => word.id === existingWord.id);

    if (existingWordIndex !== -1) {
      updatedWords[existingWordIndex] = { ...word }

      return {
        ...state,
        searchedWords: updatedWords
      };
    }

    return { ...state };
  }),
  on(WordStateActions.setEditedWord, (state: WordsState, { word }) => ({
    ...state,
    editedWord: word ? { ...word } : null
  })),
)

// export function wordsReducer(state: WordsState = initialState, action: WordStateActions.WordActions): WordsState {
//   switch (action.type) {
//     case WordStateActions.ADD_WORDS:
//       return {
//         ...state,
//         searchedWords: [...action.payload]
//       }
//     case WordStateActions.ADD_WORD:
//       return {
//         ...state,
//         searchedWords: [...state.searchedWords, { ...action.payload }]
//       };
//
//     case WordStateActions.EDIT_WORD: {
//       const updatedWords: Word[] = [...state.searchedWords];
//       const existingWordIndex: number = updatedWords.findIndex((word: Word) => word.id === action.payload.id);
//
//       if (existingWordIndex !== -1) {
//         updatedWords[existingWordIndex] = { ...action.payload }
//
//         return {
//           ...state,
//           searchedWords: updatedWords
//         };
//       }
//
//       return { ...state };
//     }
//
//     case WordStateActions.SET_EDITED_WORD:
//       return {
//         ...state,
//         editedWord: action.payload ? { ...action.payload } : null
//       }
//
//     default:
//       return { ...state }
//   }
// }
