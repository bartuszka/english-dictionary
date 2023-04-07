import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { CommonModule } from '@angular/common';
import { WordTypeShortcutPipe } from '../../shared/pipes/word-type-shortcut.pipe';
import { NounTypePipe } from './noun-type.pipe';
import { VerbTypePipe } from './verb-type.pipe';
import { ContextWordTypeTransactionTypePipe } from './context-word-type-transaction-type.pipe';
import { WordTranslationComponent } from './word-translation/word-translation.component';
import { WordHeaderComponent } from './word-header/word-header.component';

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
  ],
  declarations: [
    SearchResultsComponent,
    WordHeaderComponent,
    WordTranslationComponent,
    WordTypeShortcutPipe,
    NounTypePipe,
    VerbTypePipe,
    ContextWordTypeTransactionTypePipe,
  ]
})
export class SearchResultsModule {}
