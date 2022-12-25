import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSideBarComponent } from './right-side-bar.component';
import { UnderWorkingModule } from 'src/app/modals/under-working/under-working.module';
import { NgrModelModule } from 'src/app/features/ngr-model/ngr-model.module';



@NgModule({
  declarations: [
    RightSideBarComponent
  ],
  imports: [
    CommonModule,
    NgrModelModule,
    UnderWorkingModule
  ],
  exports : [
    RightSideBarComponent
  ]
})
export class RightSideBarModule { }
