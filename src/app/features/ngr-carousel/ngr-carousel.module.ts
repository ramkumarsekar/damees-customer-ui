import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrCarouselComponent } from './ngr-carousel.component';
import { NgrCarouselItemDirective } from './ngr-carousel-item.directive';
import { NgrCarouselItemElementDirective } from './ngr-carousel-item-element.directive';


@NgModule({
  declarations: [
    NgrCarouselComponent,
    NgrCarouselItemDirective,
    NgrCarouselItemElementDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NgrCarouselComponent,
    NgrCarouselItemDirective
  ]
})
export class NgrCarouselModule { }
