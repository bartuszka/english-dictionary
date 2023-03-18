import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsService } from './search-results.service';
import { tap } from 'rxjs';

const searchResultRoutes: Routes = [{
  path: '',
  component: SearchResultsComponent,
  resolve: {
    words: () => inject(SearchResultsService).fetchWords().pipe(tap(data => console.log(data)))
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
