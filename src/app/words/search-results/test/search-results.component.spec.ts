import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchResultsModule } from '../search-results.module';
import { SearchResultsComponent } from '../search-results.component';
import { WordsStateService } from '../../services/words-state.service';
import { DebugElement } from '@angular/core';
import { WordStateServiceMock } from './word-state-service.mock';
import { By } from '@angular/platform-browser';
import { getTestWords } from '../../../shared/test/word-data';
import { Word } from '../../models/general-word';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';
import { map, Observable } from 'rxjs';

describe('SearchResultsComponent', () => {
  let searchResultsComponent: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let debugEl: DebugElement;
  let searchResultsService: WordStateServiceMock;
  let testScheduler: TestScheduler;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SearchResultsModule
      ],
      providers: [
        { provide: WordsStateService, useClass: WordStateServiceMock }
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchResultsComponent);
        searchResultsComponent = fixture.componentInstance;
        debugEl = fixture.debugElement;
        /* eslint @typescript-eslint/no-explicit-any: off */
        searchResultsService = TestBed.inject(WordsStateService) as any as WordStateServiceMock;
      });
  }));

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
  })


  it('Should create component', () => {
    expect(searchResultsComponent).toBeTruthy();
  });

  it('Should get words from WordsStateService', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected: string = '(a|)';
      const requiredValue: string = JSON.stringify(getTestWords());

      searchResultsService.setWordsStream();
      fixture.detectChanges();

      const testedObservable$: Observable<string> = searchResultsComponent.words$.pipe(
        map((words: Word[]) => JSON.stringify(words))
      );

      expectObservable(testedObservable$).toBe(expected, { a: requiredValue });
    });
  });

  it('Should display words', () => {
    searchResultsService.setWordsStream();
    fixture.detectChanges();
    const wordListElements: DebugElement[] = debugEl.queryAll(By.css('li'));
    const testWords: Word[] = getTestWords();

    expect(wordListElements.length).toBe(testWords.length);

    for (let i = 0; i < wordListElements.length; i++) {
      const currentWordDbEl: DebugElement = wordListElements[i];
      const wordHeader: DebugElement = currentWordDbEl.query(By.css('app-word-header'));
      const wordTranslations: DebugElement[] = currentWordDbEl.queryAll(By.css('.body > app-word-translation'));

      expect(wordHeader).toBeTruthy();
      expect(wordTranslations.length).toBe(testWords[i].translations.length);
    }
  });
});
