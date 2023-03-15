import { NgModule } from '@angular/core';
import { AddWordComponent } from './add-word.component';
import { AddWordRoutingModule } from './add-word-routing.module';

@NgModule({
  imports: [
    AddWordRoutingModule
  ],
  declarations: [
    AddWordComponent
  ]
})
export class AddWordModule {}
