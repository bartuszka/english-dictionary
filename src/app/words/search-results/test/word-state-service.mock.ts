import { Observable, of } from 'rxjs';
import { getTestEditedWord, getTestNewWord, getTestVerb, getTestWords } from '../../../shared/test/word-data';
import Spy = jasmine.Spy;
import { Word } from '../../models/general-word';

export class WordStateServiceMock {
  public words$: Observable<Word[]>;

  public initializeGetWords: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestWords()));
  public dispatchGetWords: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestWords));
  public dispatchAddWord: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestNewWord));
  public dispatchEditWord: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestEditedWord()));
  public dispatchSetEditWord: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestEditedWord()));
  public getWordFromState: Spy<jasmine.Func> = jasmine.createSpy().and.returnValue(of(getTestVerb));
  public setWordsStream: Spy<jasmine.Func> = jasmine.createSpy().and.callFake(() => this.words$ = of(getTestWords()));
}
