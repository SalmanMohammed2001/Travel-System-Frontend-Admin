import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
;
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/customer/inner-components/add-customer/add-customer.component';
import { AllCustomerComponent } from './components/customer/inner-components/all-customer/all-customer.component';
import { DeleteCustomerComponent } from './components/customer/inner-components/delete-customer/delete-customer.component';
import { FindCustomerComponent } from './components/customer/inner-components/find-customer/find-customer.component';
import { UpdateCustomerComponent } from './components/customer/inner-components/update-customer/update-customer.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AddVehicleComponent } from './components/vehicle/inner-components/add-vehicle/add-vehicle.component';
import { AllVehicleComponent } from './components/vehicle/inner-components/all-vehicle/all-vehicle.component';
import { UpdateVehicleComponent } from './components/vehicle/inner-components/update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './components/vehicle/inner-components/delete-vehicle/delete-vehicle.component';
import { FindVehicleComponent } from './components/vehicle/inner-components/find-vehicle/find-vehicle.component';
import { DriverComponent } from './components/driver/driver.component';
import { AddDriverComponent } from './components/driver/inner-components/add-driver/add-driver.component';
import { UpdateDriverComponent } from './components/driver/inner-components/update-driver/update-driver.component';
import { FindDriverComponent } from './components/driver/inner-components/find-driver/find-driver.component';
import { AllDriverComponent } from './components/driver/inner-components/all-driver/all-driver.component';
import { DeleteDriverComponent } from './components/driver/inner-components/delete-driver/delete-driver.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    AddCustomerComponent,
    AllCustomerComponent,
    DeleteCustomerComponent,
    FindCustomerComponent,
    UpdateCustomerComponent,
    VehicleComponent,
    AddVehicleComponent,
    AllVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent,
    FindVehicleComponent,
    DriverComponent,
    AddDriverComponent,
    UpdateDriverComponent,
    FindDriverComponent,
    AllDriverComponent,
    DeleteDriverComponent,

  ],
  exports: [

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
