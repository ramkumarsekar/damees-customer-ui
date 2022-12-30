import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { NgrModelModule } from 'src/app/features/ngr-model/ngr-model.module';
import { UnderWorkingModule } from 'src/app/modals/under-working/under-working.module';
import { NgrCarouselItemDirective } from 'src/app/features/ngr-carousel/ngr-carousel-item.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    NgrModelModule,
    // UnderWorkingModule,
    RouterModule
  ],
  exports : [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
