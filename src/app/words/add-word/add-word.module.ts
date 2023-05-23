import { NgModule } from '@angular/core';
import { AddWordComponent } from './add-word.component';
import { AddWordRoutingModule } from './add-word-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContextWordTypeTransactionTypePipe } from './pipes/context-word-type-transaction-type.pipe';
import { NgIterablePipe } from './pipes/ngIterable.pipe';
import {
  BchDcButtonModule,
  BchDcInputModule,
  BchDcOptionBoxModule,
  BchDcSelectButtonModule,
  BchDcSelectButtonsModule,
  BchDcTriangleSelectModule,
} from 'bch-dc-components';
import { WordTypeShortcutPipe } from '../../shared/pipes/word-type-shortcut.pipe';
import { AddWordNounComponent } from './add-word-noun/add-word-noun.component';
import { AddWordVerbComponent } from './add-word-verb/add-word-verb.component';
import { AddWordOtherComponent } from './add-word-other/add-word-other.component';
import { AddWordTransitionComponent } from './add-word-transition/add-word-transition.component';
import { AddWordFormService } from './services/add-word-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddWordRoutingModule,
    BchDcInputModule,
    BchDcSelectButtonsModule,
    BchDcSelectButtonModule,
    BchDcOptionBoxModule,
    BchDcTriangleSelectModule,
    BchDcButtonModule,
  ],
  declarations: [
    AddWordComponent,
    ContextWordTypeTransactionTypePipe,
    NgIterablePipe,
    AddWordNounComponent,
    AddWordVerbComponent,
    AddWordOtherComponent,
    AddWordTransitionComponent,
  ],
  providers: [
    AddWordFormService,
    WordTypeShortcutPipe
  ]
})
export class AddWordModule {}
