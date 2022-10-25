import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesModule } from 'src/app/components/categories/categories.module';
import { ProductServicesModule } from 'src/app/components/product-services/product-services.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    ProductServicesModule
  ]
})
export class HomeModule { }
