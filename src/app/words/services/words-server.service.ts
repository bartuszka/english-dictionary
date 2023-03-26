import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsServerService {
  constructor(private httpClient: HttpClient) {}

  public fetchWords(): Observable<Word[]> {
    return this.httpClient.get<Word[]>('words');
  }

  public addWord(word: Word): Observable<Word> {
    return this.httpClient.post<Word>('add-word', word);
  }

  public editWord(word: Word): Observable<Word> {
    return this.httpClient.put<Word>('edit-word', word);
  }
}
