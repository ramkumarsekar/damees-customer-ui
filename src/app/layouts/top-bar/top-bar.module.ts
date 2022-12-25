import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarRoutingModule } from './top-bar-routing.module';
import { TopBarComponent } from './top-bar.component';
import { RightSideBarModule } from '../right-side-bar/right-side-bar.module';
import { NgrMenubarModule } from 'src/app/features/ngr-menubar/ngr-menubar.module';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    TopBarRoutingModule,
    NgrMenubarModule,
    RightSideBarModule
  ],
  exports : [
    TopBarComponent
  ]
})
export class TopBarModule { }
