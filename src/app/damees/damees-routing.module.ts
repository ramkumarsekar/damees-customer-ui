import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DameesComponent } from './damees.component';

const routes: Routes = [
  {
    path : '',
    component : DameesComponent,
    children : [
        {
          path: '',
          loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
        },
        {
          path : 'products',
          loadChildren:() => import('../pages/product-listing/product-listing.module').then(m => m.ProductListingModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DameesRoutingModule { }
