import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrModelComponent } from './ngr-model.component';



@NgModule({
  declarations: [
    NgrModelComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NgrModelComponent
  ]
})
export class NgrModelModule { }
