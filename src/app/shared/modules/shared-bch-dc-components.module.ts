import { NgModule } from '@angular/core';
import { BchDcButtonModule } from 'bch-dc-components';

@NgModule({
  imports: [
    BchDcButtonModule,
  ],
  exports: [
    BchDcButtonModule
  ]
})
export class SharedBchDcComponentsModule {}
