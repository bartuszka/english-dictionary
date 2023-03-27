import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word';
import { Observable } from 'rxjs';
import { WordsStateService } from '../services/words-state.service';
import { Verb } from '../models/verb';
import { Noun } from '../models/noun';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public words$: Observable<(Word | Verb | Noun)[]>;

  constructor(private searchResultsService: WordsStateService, private router: Router) {}

  public ngOnInit(): void {
    this.words$ = this.searchResultsService.words$;
  }

  public editWord(word: Word) {
    //TO-DO
    this.searchResultsService.dispatchSetEditWord(word);
    this.router.navigate(['/add-word']);
  }
}
