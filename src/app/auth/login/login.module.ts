import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { NgrModelModule } from 'src/app/features/ngr-model/ngr-model.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgrModelModule
  ],
  exports: [
    LoginComponent
  ]
  
})
export class LoginModule { }
