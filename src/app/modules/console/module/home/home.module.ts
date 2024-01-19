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
import {MatSelectModule} from "@angular/material/select";
import { GuideComponent } from './components/guide/guide.component';
import { AddGuideComponent } from './components/guide/inner-components/add-guide/add-guide.component';
import { FindGuideComponent } from './components/guide/inner-components/find-guide/find-guide.component';
import { AllGuideComponent } from './components/guide/inner-components/all-guide/all-guide.component';
import { DeleteGuideComponent } from './components/guide/inner-components/delete-guide/delete-guide.component';
import { UpdateGuideComponent } from './components/guide/inner-components/update-guide/update-guide.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AddHotelComponent } from './components/hotel/inner-components/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './components/hotel/inner-components/update-hotel/update-hotel.component';
import { FindHotelComponent } from './components/hotel/inner-components/find-hotel/find-hotel.component';
import { AllHotelComponent } from './components/hotel/inner-components/all-hotel/all-hotel.component';
import { DeleteHotelComponent } from './components/hotel/inner-components/delete-hotel/delete-hotel.component';
import { PackageDetailsComponent } from './components/package-details/package-details.component';
import { AddPackageComponent } from './components/package-details/inner-components/add-package/add-package.component';
import { AllPackageComponent } from './components/package-details/inner-components/all-package/all-package.component';
import { DeletePackageComponent } from './components/package-details/inner-components/delete-package/delete-package.component';
import { UpdatePackageComponent } from './components/package-details/inner-components/update-package/update-package.component';
import { FindPackageComponent } from './components/package-details/inner-components/find-package/find-package.component';
import { BookingComponent } from './components/booking/booking.component';
import { AddBookingComponent } from './components/booking/inner-components/add-booking/add-booking.component';
import { DeleteBookingComponent } from './components/booking/inner-components/delete-booking/delete-booking.component';
import { UpdateBookingComponent } from './components/booking/inner-components/update-booking/update-booking.component';
import { FindBookingComponent } from './components/booking/inner-components/find-booking/find-booking.component';
import { AllBookingComponent } from './components/booking/inner-components/all-booking/all-booking.component';



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
    GuideComponent,
    AddGuideComponent,
    FindGuideComponent,
    AllGuideComponent,
    DeleteGuideComponent,
    UpdateGuideComponent,
    HotelComponent,
    AddHotelComponent,
    UpdateHotelComponent,
    FindHotelComponent,
    AllHotelComponent,
    DeleteHotelComponent,
    PackageDetailsComponent,
    AddPackageComponent,
    AllPackageComponent,
    DeletePackageComponent,
    UpdatePackageComponent,
    FindPackageComponent,
    BookingComponent,
    AddBookingComponent,
    DeleteBookingComponent,
    UpdateBookingComponent,
    FindBookingComponent,
    AllBookingComponent,

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
        MatIconModule,
        MatSelectModule
    ]
})
export class HomeModule { }
