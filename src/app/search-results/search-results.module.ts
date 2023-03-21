import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { CommonModule } from '@angular/common';
import { WordTypePipe } from './word-type.pipe';
import { NounTypePipe } from './noun-type.pipe';
import { VerbTypePipe } from './verb-type.pipe';

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule
  ],
  declarations: [
    SearchResultsComponent,
    WordTypePipe,
    NounTypePipe,
    VerbTypePipe,
  ]
})
export class SearchResultsModule {}
