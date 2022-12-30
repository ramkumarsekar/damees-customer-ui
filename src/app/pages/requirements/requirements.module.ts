import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementsComponent } from './requirements.component';



@NgModule({
  declarations: [
    RequirementsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    RequirementsComponent
  ]
})
export class RequirementsModule { }
