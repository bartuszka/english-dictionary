import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './add-word.component';

const addWordRoutes: Routes = [
  {
    path: '',
    component: AddWordComponent
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
