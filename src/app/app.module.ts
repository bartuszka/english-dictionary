import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuDirective } from './side-menu/side-menu.directive';
import { CircleButtonComponent } from './components-library/circle-button/circle-button.component';
import { HeaderButtonComponent } from './components-library/header-button/header-button.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
