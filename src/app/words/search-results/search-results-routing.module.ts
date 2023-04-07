import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';
import { WordsStateService } from '../services/words-state.service';

const searchResultRoutes: Routes = [{
  path: '',
  component: SearchResultsComponent,
  resolve: {
    words: () => inject(WordsStateService).initializeGetWords()
  }
}];

@NgModule({
  imports: [
    RouterModule.forChild(searchResultRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchResultsRoutingModule {}
