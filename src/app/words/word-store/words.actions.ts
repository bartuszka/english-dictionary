import { createAction, props } from '@ngrx/store';

import { Word } from '../models/general-word';

export const ADD_WORDS = '[Word] ADD_WORDS';
export const ADD_WORD = '[Word] ADD_WORD';
export const EDIT_WORD = '[Word] EDIT_WORD';
export const SET_EDITED_WORD = '[Word] SET_EDITED_WORD';

export const addWords = createAction(
  ADD_WORDS, props<{ words: Word[] }>()
);

export const addWord = createAction(
  ADD_WORD, props<{ word: Word }>()
);

export const editWord = createAction(
  EDIT_WORD, props<{ word: Word }>()
);

export const setEditedWord = createAction(
  SET_EDITED_WORD, props<{ word: Word }>()
);

// export class AddWords implements Action {
//   readonly type: '[Word] ADD_WORDS' = ADD_WORDS;
//   constructor(public payload: Word[]) {}
// }
//
// export class AddWord implements Action {
//   readonly type: '[Word] ADD_WORD' = ADD_WORD;
//   constructor(public payload: Word) {}
// }
//
// export class EditWord implements Action {
//   readonly type: '[Word] EDIT_WORD' = EDIT_WORD;
//   constructor(public payload: Word) {}
// }
//
// export class SetEditedWord implements Action {
//   readonly type: '[Word] SET_EDITED_WORD' = SET_EDITED_WORD;
//   constructor(public payload: Word) {}
// }
//
// export type WordActions =
//   AddWords
//   | AddWord
//   | EditWord
//   | SetEditedWord;
