import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { NgrModelModule } from 'src/app/features/ngr-model/ngr-model.module';
import { RequirementsModule } from 'src/app/pages/requirements/requirements.module';



@NgModule({
  declarations: [
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    NgrModelModule,
    RequirementsModule
  ],
  exports : [
    ProductCategoryComponent
  ]
})
export class ProductCategoryModule { }
