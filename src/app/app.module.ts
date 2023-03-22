import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuDirective } from './side-menu/side-menu.directive';
import { CircleButtonComponent } from './components-library/circle-button/circle-button.component';
import { HeaderButtonComponent } from './components-library/header-button/header-button.component';
import { reducers } from './app-state';
import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    SideMenuDirective,
    CircleButtonComponent,
    HeaderButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
