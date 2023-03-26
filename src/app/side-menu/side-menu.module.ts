import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuDirective } from './side-menu.directive';
import { CircleButtonComponent } from '../components-library/circle-button/circle-button.component';
import { SearchFiltersComponent } from '../filters/search-filters/search-filters.component';
import { AddWordFiltersComponent } from '../filters/add-word-filters/add-word-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SideMenuComponent,
    SideMenuDirective,
    CircleButtonComponent,
    SearchFiltersComponent,
    AddWordFiltersComponent
  ],
  exports: [
    SideMenuComponent,
    SearchFiltersComponent,
    AddWordFiltersComponent
  ]
})
export class SideMenuModule {}
