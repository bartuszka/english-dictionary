import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search-results'
  },
  {
    path: 'search-results',
    loadChildren: () => import('./words/search-results/search-results.module').then(m => m.SearchResultsModule)
  },
  {
    path: 'add-word',
    loadChildren: () => import('./words/add-word/add-word.module').then(m => m.AddWordModule),
  },
  {
    path: 'edit-word/:id',
    loadChildren: () => import('./words/add-word/add-word.module').then(m => m.AddWordModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
