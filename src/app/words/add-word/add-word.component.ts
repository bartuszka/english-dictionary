import { Component, OnInit } from '@angular/core';
import { WordsStateService } from '../services/words-state.service';
import { Observable, of } from 'rxjs';
import { Word } from '../models/general-word';
import { ErrorHandlingService } from '../../error/error-handling.service';
import { Deactivable } from '../../shared/directives/deactivable';
import { WarningMessages } from '../../error/models/warning-messages';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationLink } from '../../shared/models/navigation-link';
import { WordForm } from '../models/add-word-form/word-form';
import { AddWordFormService } from './add-word-form.service';
import { WordType } from '../models/word-type';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent extends Deactivable implements OnInit {
  public editedWord: Word;
  public addWordForm: FormGroup<WordForm>;
  public wordTypes: typeof WordType = WordType;

  constructor(
    private wordsStateService: WordsStateService,
    private addWordFormService: AddWordFormService,
    private errorHandlingService: ErrorHandlingService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initializeEditedWord();
  }

  public confirmDeactivate(): Observable<boolean> {
    if (!this.editedWord) {
      return of(true);
    }

    this.errorHandlingService.showWarning(WarningMessages.ADD_WORD_LEAVE_CONFIRM, () => {
      // this.wordsStateService.dispatchSetEditWord(null);
      this.canDeactivateSubject$.next(true);
    });

    return this.canDeactivate$;
  }

  public addWord(): void {
    console.log('SUBMIT FORM', this.addWordForm.value, this.addWordForm);
    console.log(this.addWordForm.controls.translations);
  }

  private initializeEditedWord(): void {
    const editedWordId: string = this.route.snapshot.params['id'];

    this.wordsStateService
      .getWordFromState(editedWordId)
      .subscribe((word: Word) =>
        editedWordId && !word
          ? this.router.navigate([`/${NavigationLink.SEARCH_RESULTS}`])
          : (this.addWordForm = this.addWordFormService.createAddWordForm((this.editedWord = word))),
      );
  }
}
