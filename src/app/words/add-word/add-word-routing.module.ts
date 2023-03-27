import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './add-word.component';
import { WordsStateService } from '../services/words-state.service';

const addWordRoutes: Routes = [
  {
    path: '',
    component: AddWordComponent,
    canDeactivate: [(component: AddWordComponent) => component.confirmDeactivate()],
    resolve: {
      editedWord: () => inject(WordsStateService).editedWord$
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(addWordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddWordRoutingModule {

}
