import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';

@NgModule({
  imports: [
    SearchResultsRoutingModule
  ],
  declarations: [
    SearchResultsComponent
  ]
})
export class SearchResultsModule {}
