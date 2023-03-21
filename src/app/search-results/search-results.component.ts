import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WordsState } from '../models/words-state';
import { Word } from '../models/word';
import { Observable } from 'rxjs';
import { SearchResultsService } from './search-results.service';
import { Verb } from '../models/verb';
import { Noun } from '../models/noun';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public words$: Observable<(Word | Verb | Noun)[]>;
  constructor(private store: Store<{ wordsState: WordsState }>, private searchResultsService: SearchResultsService) {}

  public ngOnInit(): void {
    this.words$ = this.searchResultsService.words$;
  }
}
