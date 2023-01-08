import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesModule } from 'src/app/components/categories/categories.module';
import { ProductServicesModule } from 'src/app/components/product-services/product-services.module';
import { NgrModelModule } from 'src/app/features/ngr-model/ngr-model.module';
import { LoginModule } from 'src/app/auth/login/login.module';
import { SignupModule } from 'src/app/auth/signup/signup.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    ProductServicesModule,
    NgrModelModule,
    LoginModule,
    SignupModule
  ]
})
export class HomeModule { }
