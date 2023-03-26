import { NgModule } from '@angular/core';
import { AddWordComponent } from './add-word.component';
import { AddWordRoutingModule } from './add-word-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AddWordRoutingModule
  ],
  declarations: [
    AddWordComponent
  ]
})
export class AddWordModule {}
