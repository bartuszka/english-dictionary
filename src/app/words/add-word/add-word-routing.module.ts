import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './add-word.component';
import { WordsStateService } from '../services/words-state.service';
import { AddWordFormService } from './add-word-form.service';

const addWordRoutes: Routes = [
  {
    path: '',
    component: AddWordComponent,
    canDeactivate: [(component: AddWordComponent) => component.confirmDeactivate()],
    resolve: {
      words: () => inject(WordsStateService).initializeGetWords()
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(addWordRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AddWordFormService
  ]
})
export class AddWordRoutingModule {

}
