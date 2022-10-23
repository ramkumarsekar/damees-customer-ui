import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DameesRoutingModule } from './damees-routing.module';
import { DameesComponent } from './damees.component';
import { FooterModule } from '../layouts/footer/footer.module';
import { TopBarModule } from '../layouts/top-bar/top-bar.module';


@NgModule({
  declarations: [
    DameesComponent
  ],
  imports: [
    CommonModule,
    DameesRoutingModule,
    FooterModule,
    TopBarModule
  ]
})
export class DameesModule { }
