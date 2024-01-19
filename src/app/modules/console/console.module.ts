import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import {HomeModule} from "./module/home/home.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";




@NgModule({
  declarations: [
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    HomeModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule

  ],
  providers: [],
})
export class ConsoleModule { }
