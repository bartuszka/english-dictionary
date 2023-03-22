import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { SideMenuDirective } from '../side-menu/side-menu.directive';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from '../components-library/circle-button/circle-button.component';
import { HeaderButtonComponent } from '../components-library/header-button/header-button.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorModule } from '../shared/modules/error/error.module';
import { StoreModule } from '@ngrx/store';

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
    HeaderButtonComponent,
  ],
  exports: [
    ErrorModule,
    HeaderComponent,
    SideMenuComponent,
    CircleButtonComponent,
    HeaderButtonComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ]
})
export class CoreModule {}
