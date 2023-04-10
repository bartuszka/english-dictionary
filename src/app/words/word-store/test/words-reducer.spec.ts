import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { WordsState } from '../../models/words-state';
import * as wordsReducer from '../words.reducer';
import { getTestEditedWord, getTestWords, getTestWordsAfterEdition } from '../../../shared/test/word-data';
import { ADD_WORD, ADD_WORDS, EDIT_WORD, SET_EDITED_WORD } from '../words.actions';
import { Word } from '../../models/general-word';

const initialState: WordsState = {
  searchedWords: null,
  editedWord: null
};

describe('WordsStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState })
      ]
    })
  });


  it('Should return all words', () => {
    const action = {
      type: 'Unknown',
    };
    const wordsState = wordsReducer.wordsReducer(initialState, action);
    expect(wordsState).toBe(initialState);
  });

  it('Should add words to the state', () => {
    const testWords: Word[] = getTestWords();

    const expectedState: WordsState = {
      searchedWords: testWords,
      editedWord: null
    }

    const action = {
      type: ADD_WORDS,
      words: testWords,
    };
    const wordsState = wordsReducer.wordsReducer(initialState, action);
    expect(JSON.stringify(wordsState.searchedWords)).toBe(JSON.stringify(expectedState.searchedWords));
    expect(wordsState).not.toBe(initialState);
  });

  it('Should add word to the state', () => {
    const testWords: Word[] = getTestWords();

    const newInitialState: WordsState = {
      searchedWords: testWords.slice(0, 3),
      editedWord: null
    }

    const expectedState: WordsState = {
      searchedWords: testWords.slice(0, 4),
      editedWord: null
    }

    const action = {
      type: ADD_WORD,
      word: testWords[3],
    };

    const wordsState = wordsReducer.wordsReducer(newInitialState, action);
    expect(JSON.stringify(wordsState.searchedWords)).toBe(JSON.stringify(expectedState.searchedWords));
    expect(wordsState).not.toBe(newInitialState);
  });

  it('Should edit word in the state', () => {
    const testWords: Word[] = getTestWords();
    const editedWord: Word = getTestEditedWord();
    const testWordsAfterEdition: Word[] = getTestWordsAfterEdition(editedWord);

    const newInitialState: WordsState = {
      searchedWords: testWords,
      editedWord: null
    }

    const expectedState: WordsState = {
      searchedWords: testWordsAfterEdition,
      editedWord: null
    }

    const action = {
      type: EDIT_WORD,
      word: editedWord,
    };

    const wordsState = wordsReducer.wordsReducer(newInitialState, action);
    expect(JSON.stringify(wordsState.searchedWords)).toBe(JSON.stringify(expectedState.searchedWords));
    expect(wordsState).not.toBe(initialState);
  });

  it('Should set edited word in the state', () => {
    const editedWord: Word = getTestEditedWord();

    const expectedState: WordsState = {
      searchedWords: null,
      editedWord: editedWord
    }

    const action = {
      type: SET_EDITED_WORD,
      word: editedWord,
    };

    const wordsState = wordsReducer.wordsReducer(initialState, action);
    expect(JSON.stringify(wordsState.editedWord)).toBe(JSON.stringify(expectedState.editedWord));
    expect(wordsState).not.toBe(initialState);
  });
});
