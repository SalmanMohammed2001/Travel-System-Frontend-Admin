import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import {HomeModule} from "./module/home/home.module";


@NgModule({
  declarations: [
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    HomeModule
  ]
})
export class ConsoleModule { }
