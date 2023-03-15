import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results.component';

const searchResultRoutes: Routes = [{
  path: '',
  component: SearchResultsComponent,
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
