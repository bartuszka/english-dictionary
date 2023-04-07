import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorModule } from '../error/error.module';
import { SharedPipesModule } from '../shared/modules/shared-pipes.module';
import { NgModule } from '@angular/core';
import { BchDcHeaderModule, BchDcSideMenuModule } from 'bch-dc-components';
import { SearchFiltersComponent } from '../filters/search-filters/search-filters.component';
import { AddWordFiltersComponent } from '../filters/add-word-filters/add-word-filters.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule,
    BchDcHeaderModule
  ],
  declarations: [
    SearchFiltersComponent,
    AddWordFiltersComponent
  ],
  exports: [
    ErrorModule,
    SharedPipesModule,
    BchDcHeaderModule,
    BchDcSideMenuModule,
    SearchFiltersComponent,
    AddWordFiltersComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
})
export class CoreModule {}
