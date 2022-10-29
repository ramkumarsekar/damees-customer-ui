import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServicesComponent } from './product-services.component';



@NgModule({
  declarations: [
    ProductServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProductServicesComponent
  ]
})
export class ProductServicesModule { }
