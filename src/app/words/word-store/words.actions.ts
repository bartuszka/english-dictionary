import { Action } from '@ngrx/store';

import { Word } from '../../models/word';

export const ADD_WORDS = 'ADD_WORDS';
export const ADD_WORD = 'ADD_WORD';
export const EDIT_WORD = 'EDIT_WORD';

export class AddWords implements Action {
  readonly type: 'ADD_WORDS' = ADD_WORDS;
  constructor(public payload: Word[]) {}
}

export class AddWord implements Action {
  readonly type: 'ADD_WORD' = ADD_WORD;
  constructor(public payload: Word) {}
}

export class EditWord implements Action {
  readonly type: 'EDIT_WORD' = EDIT_WORD;
  constructor(public payload: Word) {}
}

export type WordActions = AddWords | AddWord | EditWord;
