import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingComponent } from './product-listing.component';
import { NgrCarouselModule } from 'src/app/features/ngr-carousel/ngr-carousel.module';
import { CategoriesModule } from 'src/app/components/categories/categories.module';
import { NgrCarouselItemDirective } from 'src/app/features/ngr-carousel/ngr-carousel-item.directive';
import { ProductCategoryModule } from 'src/app/components/product-category/product-category.module';

@NgModule({
  declarations: [
    ProductListingComponent,
  ],
  imports: [
    CommonModule,
    ProductListingRoutingModule,
    NgrCarouselModule,
    CategoriesModule,
    ProductCategoryModule
  ]
})
export class ProductListingModule { }
