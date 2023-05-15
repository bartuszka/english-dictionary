import { NgModule } from '@angular/core';
import { AddWordComponent } from './add-word.component';
import { AddWordRoutingModule } from './add-word-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContextWordTypeTransactionType } from './context-word-type-transaction-type';
import { NgIterablePipe } from './ngIterable.pipe';
import { BchDcInputModule, BchDcSelectButtonsModule } from 'bch-dc-components';
import { WordTypeShortcutPipe } from '../../shared/pipes/word-type-shortcut.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddWordRoutingModule,
    BchDcInputModule,
    BchDcSelectButtonsModule,
  ],
  declarations: [
    AddWordComponent,
    ContextWordTypeTransactionType,
    NgIterablePipe,
  ],
  providers: [
    WordTypeShortcutPipe
  ]
})
export class AddWordModule {}
