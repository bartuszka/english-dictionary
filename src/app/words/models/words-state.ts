import { Word } from './general-word';

export interface WordsState {
  searchedWords: Word[];
  editedWord: Word;
}
