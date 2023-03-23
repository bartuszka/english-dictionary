import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { SideMenuDirective } from '../side-menu/side-menu.directive';
import { CircleButtonComponent } from '../components-library/circle-button/circle-button.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorModule } from '../shared/modules/error/error.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
  ],
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    SideMenuDirective,
    CircleButtonComponent,
  ],
  exports: [
    ErrorModule,
    HeaderComponent,
    SideMenuComponent,
    CircleButtonComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
