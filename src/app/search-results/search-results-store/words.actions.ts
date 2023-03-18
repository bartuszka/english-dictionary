import { Action } from '@ngrx/store';

import { Word } from '../../models/word';

export const ADD_WORDS = 'ADD_WORDS';
export const ADD_WORD = 'ADD_WORDS';

export class AddWords implements Action {
  readonly type: string = ADD_WORDS;
  constructor(public payload: Word[]) {}
}

export class AddWord implements Action {
  readonly type: string = ADD_WORD;
  constructor(public payload: Word) {}
}
