import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DameesModule } from './damees/damees.module';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('./damees/damees.module').then(m => m.DameesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
