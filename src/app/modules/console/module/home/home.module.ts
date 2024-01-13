import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CustomerComponent } from './components/customer/customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
         HttpClientModule
    ]
})
export class HomeModule { }
