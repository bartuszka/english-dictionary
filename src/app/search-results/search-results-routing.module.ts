import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';
import { WordsStateService } from '../words-state.service';

const searchResultRoutes: Routes = [{
  path: '',
  component: SearchResultsComponent,
  resolve: {
    words: () => inject(WordsStateService).fetchWords()
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
export class SearchResultsRoutingModule {

}
