import { WordsServerService } from '../words-server.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Word } from '../../models/general-word';
import { getTestHttpError, getTestEditedWord, getTestNewWord, getTestWords } from '../../../shared/test/word-data';
import { HttpErrorResponse } from '@angular/common/http';

describe('WordsServerService', () => {
  let wordsServerService: WordsServerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WordsServerService,
      ]
    });
  });

  beforeEach(() => {
    wordsServerService = TestBed.inject(WordsServerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });




  it('Should fetch Words', () => {
    const wordsForTest = getTestWords();

    wordsServerService.fetchWords().subscribe((words: Word[]) => {
      expect(words).toBeTruthy();
      expect(words.length).toBe(wordsForTest.length);
      expect(words).toEqual(wordsForTest);
    });

    const req: TestRequest = httpTestingController.expectOne('words');
    expect(req.request.method).toBe('GET');
    req.flush(getTestWords());
  });


  it('Should add Word', () => {
    const testNewWord = getTestNewWord();

    wordsServerService.addWord(testNewWord).subscribe((word: Word) => {
      expect(word).toBeTruthy();
      expect(word).toEqual(testNewWord);
    });

    const req: TestRequest = httpTestingController.expectOne('add-word');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(testNewWord);
    req.flush(getTestNewWord());
  });


  it('Should edit Word', () => {
    const testEditedWord: Word = getTestEditedWord();

    wordsServerService.editWord(testEditedWord).subscribe((word: Word) => {
      expect(word).toBeTruthy();
      expect(word).toEqual(testEditedWord);
    });

    const req: TestRequest = httpTestingController.expectOne('edit-word');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(testEditedWord);
    req.flush(getTestEditedWord());
  });



  // ERROR TESTS ===========================================================================



  it('Should give an error if fetch Words fails', () => {
    wordsServerService.fetchWords().subscribe({
      next: () => fail('The fetch words operation should have failed'),
      error: (error: HttpErrorResponse) => expect(error).toEqual(getTestHttpError('Fetch Words Error', 'words'))
    });

    const req: TestRequest = httpTestingController.expectOne('words');
    expect(req.request.method).toBe('GET');
    req.flush({ message: 'Fetch Words Error' }, getTestHttpError('Fetch Words Error', 'words'));
  });


  it('Should produce an error if add Word fails', () => {
    const testNewWord = getTestNewWord();

    wordsServerService.addWord(testNewWord).subscribe({
      next: () => fail('The add word operation should have failed'),
      error: (error: HttpErrorResponse) => expect(error).toEqual(getTestHttpError('Add Word Error', 'add-word'))
    });

    const req: TestRequest = httpTestingController.expectOne('add-word');
    expect(req.request.method).toBe('POST');
    req.flush({ message: 'Add Word Error' }, getTestHttpError('Add Word Error', 'add-word'));
  });


  it('Should produce an error if edit Word fails', () => {
    const testEditedWord = getTestEditedWord();

    wordsServerService.editWord(testEditedWord).subscribe({
      next: () => fail('The edit word operation should have failed'),
      error: (error: HttpErrorResponse) => expect(error).toEqual(getTestHttpError('Edit Word Error', 'edit-word'))
    });

    const req: TestRequest = httpTestingController.expectOne('edit-word');
    expect(req.request.method).toBe('PUT');
    req.flush({ message: 'Edit Word Error' }, getTestHttpError('Edit Word Error', 'edit-word'));
  });



  afterEach(() => {
    httpTestingController.verify();
  });
});
