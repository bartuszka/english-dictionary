import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Word } from '../models/general-word';
import { Observable } from 'rxjs';
import { WordsStateService } from '../services/words-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
  public words$: Observable<(Word)[]>;

  constructor(private searchResultsService: WordsStateService, private router: Router) {}

  public ngOnInit(): void {
    this.words$ = this.searchResultsService.words$;
  }

  public editWord(word: Word) {
    //TO-DO
    // this.searchResultsService.dispatchSetEditWord(word);
    this.router.navigate(['/edit-word', word.id]);
  }
}
