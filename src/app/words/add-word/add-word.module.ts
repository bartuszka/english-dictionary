import { NgModule } from '@angular/core';
import { AddWordComponent } from './add-word.component';
import { AddWordRoutingModule } from './add-word-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContextWordTypeTransactionType } from './context-word-type-transaction-type';
import { NgIterablePipe } from './ngIterable.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddWordRoutingModule
  ],
  declarations: [
    AddWordComponent,
    ContextWordTypeTransactionType,
    NgIterablePipe
  ],
})
export class AddWordModule {}
