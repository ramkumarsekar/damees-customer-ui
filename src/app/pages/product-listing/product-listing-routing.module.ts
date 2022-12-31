import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing.component';
import { RequirementsComponent } from './requirements/requirements.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListingComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
      {
        path: "requirements",
        loadChildren: () => import('./requirements/requirements.module').then(m => m.RequirementsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListingRoutingModule { }
