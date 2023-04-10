import { getTestWords } from '../../../shared/test/word-data';
import Spy = jasmine.Spy;
import { of } from 'rxjs';

export class WordsServerServiceMock {
  public fetchWords: Spy<jasmine.Func> = jasmine.createSpy('fetchWords').and.returnValue(of(getTestWords().slice(0,3)));
}
