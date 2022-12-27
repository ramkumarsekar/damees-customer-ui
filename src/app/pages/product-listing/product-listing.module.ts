import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListingRoutingModule } from './product-listing-routing.module';
import { ProductListingComponent } from './product-listing.component';
import { NgrCarouselModule } from 'src/app/features/ngr-carousel/ngr-carousel.module';


@NgModule({
  declarations: [
    ProductListingComponent
  ],
  imports: [
    CommonModule,
    ProductListingRoutingModule,
    NgrCarouselModule
  ]
})
export class ProductListingModule { }
