import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrMenubarComponent } from './ngr-menubar.component';



@NgModule({
  declarations: [
    NgrMenubarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NgrMenubarComponent
  ]
})
export class NgrMenubarModule { }
