import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from '../header/header.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorModule } from '../error/error.module';
import { SideMenuModule } from '../side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    SideMenuModule,
    ErrorModule,
    HeaderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
