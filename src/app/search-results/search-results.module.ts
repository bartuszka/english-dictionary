import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { CommonModule } from '@angular/common';
import { WordTypePipe } from './word-type.pipe';

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule
  ],
  declarations: [
    SearchResultsComponent,
    WordTypePipe,
  ]
})
export class SearchResultsModule {}
