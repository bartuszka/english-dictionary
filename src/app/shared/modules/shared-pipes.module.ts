import { NgModule } from '@angular/core';
import { IsIncludedInPipe } from '../pipes/is-included-in.pipe';

@NgModule({
  declarations: [
    IsIncludedInPipe
  ],
  exports: [
    IsIncludedInPipe
  ]
})
export class SharedPipesModule {}
