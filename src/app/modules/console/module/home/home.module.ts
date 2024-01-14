import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CustomerComponent } from './components/customer/customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddCustomerComponent } from './components/customer/inner-components/add-customer/add-customer.component';
import { AllCustomerComponent } from './components/customer/inner-components/all-customer/all-customer.component';
import { FindCustomerComponent } from './components/customer/inner-components/find-customer/find-customer.component';
import { UpdateCustomerComponent } from './components/customer/inner-components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/customer/inner-components/delete-customer/delete-customer.component';
import {MatIconModule} from "@angular/material/icon";
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { SaveVehicleComponent } from './components/vehicle/inner-components/save-vehicle/save-vehicle.component';
import { AllVehicleComponent } from './components/vehicle/inner-components/all-vehicle/all-vehicle.component';
import { FindVehicleComponent } from './components/vehicle/inner-components/find-vehicle/find-vehicle.component';
import { UpdateVehicleComponent } from './components/vehicle/inner-components/update-vehicle/update-vehicle.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    AddCustomerComponent,
    AllCustomerComponent,
    FindCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    VehicleComponent,
    SaveVehicleComponent,
    AllVehicleComponent,
    FindVehicleComponent,
    UpdateVehicleComponent
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
        HttpClientModule,
        FormsModule,
      MatIconModule
    ]
})
export class HomeModule { }
