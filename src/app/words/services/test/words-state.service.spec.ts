import { TestBed } from '@angular/core/testing';
import { WordsStateService } from '../words-state.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { WordsServerServiceMock } from './words-server.service.mock';
import { WordsServerService } from '../words-server.service';
import { AppState } from '../../../app-state';
import { getTestEditedWord, getTestVerb, getTestWords } from '../../../shared/test/word-data';
import { RunHelpers, TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { Observable, of } from 'rxjs';
import { Word } from '../../models/general-word';
import { addWords } from '../../word-store/words.actions';

type StoreType = { loggedIn: boolean };

const initialState: AppState = {
  wordsState: {
    searchedWords: getTestWords(),
    editedWord: getTestEditedWord()
  }
};

let store: MockStore<StoreType>;
let testScheduler: TestScheduler;

let wordsStateService: WordsStateService;

describe('WordsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordsStateService,
        provideMockStore({ initialState }),
        { provide: WordsServerService, useClass: WordsServerServiceMock }
      ]
    });
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    wordsStateService = TestBed.inject(WordsStateService);
    testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
  });

  it('Should create service', () => {
    expect(wordsStateService).toBeTruthy();
  });

  it('Should set words$ stream', () => {
    testScheduler.run((helpers: RunHelpers) => {
      const { expectObservable } = helpers;
      const expected: string = 'a';

      expectObservable(wordsStateService.words$).toBe(
        expected,
        { a: initialState.wordsState.searchedWords }
      );
    });
  });

  it('Should set editedWord$ stream', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected: string = 'a';

      expectObservable(wordsStateService.editedWord$).toBe(
        expected,
        { a: initialState.wordsState.editedWord }
      );
    });
  });

  it('Should fetch words and save it to store using dispatchGetWords', (done: DoneFn) => {
    spyOn(store, 'dispatch');

    wordsStateService.dispatchGetWords().subscribe((words: Word[]) => {
      expect(store.dispatch).toHaveBeenCalledWith(addWords({ words }));
      done();
    })
  });

  it('Should initialize words with existing words$ value using initializeGetWords', () => {
    testScheduler.run((helpers: RunHelpers) => {
      const { expectObservable } = helpers;
      const expected: string = '(a|)';
      const testedObservable$: Observable<Word[]> = wordsStateService.initializeGetWords();

      expectObservable(testedObservable$).toBe(
        expected,
        { a: getTestWords() }
      );
    });
  });

  it('Should initialize words with new words fetched from server using initializeGetWords', () => {
    testScheduler.run((helpers: RunHelpers) => {
      wordsStateService.words$ = of(null);
      const { expectObservable } = helpers;
      const expected: string = '(a|)';
      const testedObservable$: Observable<Word[]> = wordsStateService.initializeGetWords();

      expectObservable(testedObservable$).toBe(
        expected,
        { a: getTestWords().slice(0, 3) }
      );
    });
  });

  it('Should get a word from state using getWordFromState', () => {
    testScheduler.run((helpers: RunHelpers) => {
      const { expectObservable } = helpers;
      const expected: string = '(a|)';
      const testedObservable$: Observable<Word> = wordsStateService.getWordFromState(getTestVerb().id);

      expectObservable(testedObservable$).toBe(
        expected,
        { a: getTestVerb() }
      );
    });
  });
});
