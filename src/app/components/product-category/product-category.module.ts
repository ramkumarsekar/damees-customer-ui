import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    ProductCategoryComponent
  ]
})
export class ProductCategoryModule { }
