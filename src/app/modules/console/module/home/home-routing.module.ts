import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {AllCustomerComponent} from "./components/customer/inner-components/all-customer/all-customer.component";
import {AddCustomerComponent} from "./components/customer/inner-components/add-customer/add-customer.component";
import {FindCustomerComponent} from "./components/customer/inner-components/find-customer/find-customer.component";
import {
  UpdateCustomerComponent
} from "./components/customer/inner-components/update-customer/update-customer.component";
import {
  DeleteCustomerComponent
} from "./components/customer/inner-components/delete-customer/delete-customer.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {AddVehicleComponent} from "./components/vehicle/inner-components/add-vehicle/add-vehicle.component";
import {AllVehicleComponent} from "./components/vehicle/inner-components/all-vehicle/all-vehicle.component";
import {FindVehicleComponent} from "./components/vehicle/inner-components/find-vehicle/find-vehicle.component";
import {UpdateVehicleComponent} from "./components/vehicle/inner-components/update-vehicle/update-vehicle.component";
import {DeleteVehicleComponent} from "./components/vehicle/inner-components/delete-vehicle/delete-vehicle.component";
import {DriverComponent} from "./components/driver/driver.component";
import {AddDriverComponent} from "./components/driver/inner-components/add-driver/add-driver.component";
import {AllDriverComponent} from "./components/driver/inner-components/all-driver/all-driver.component";
import {FindDriverComponent} from "./components/driver/inner-components/find-driver/find-driver.component";
import {UpdateDriverComponent} from "./components/driver/inner-components/update-driver/update-driver.component";
import {DeleteDriverComponent} from "./components/driver/inner-components/delete-driver/delete-driver.component";
import {GuideComponent} from "./components/guide/guide.component";
import {AddGuideComponent} from "./components/guide/inner-components/add-guide/add-guide.component";
import {AllGuideComponent} from "./components/guide/inner-components/all-guide/all-guide.component";
import {FindGuideComponent} from "./components/guide/inner-components/find-guide/find-guide.component";
import {UpdateGuideComponent} from "./components/guide/inner-components/update-guide/update-guide.component";
import {DeleteGuideComponent} from "./components/guide/inner-components/delete-guide/delete-guide.component";
import {HotelComponent} from "./components/hotel/hotel.component";
import {AddHotelComponent} from "./components/hotel/inner-components/add-hotel/add-hotel.component";
import {AllHotelComponent} from "./components/hotel/inner-components/all-hotel/all-hotel.component";
import {FindHotelComponent} from "./components/hotel/inner-components/find-hotel/find-hotel.component";
import {UpdateHotelComponent} from "./components/hotel/inner-components/update-hotel/update-hotel.component";
import {DeleteHotelComponent} from "./components/hotel/inner-components/delete-hotel/delete-hotel.component";
import {PackageDetailsComponent} from "./components/package-details/package-details.component";
import {AddPackageComponent} from "./components/package-details/inner-components/add-package/add-package.component";
import {AllPackageComponent} from "./components/package-details/inner-components/all-package/all-package.component";
import {FindPackageComponent} from "./components/package-details/inner-components/find-package/find-package.component";
import {
  UpdatePackageComponent
} from "./components/package-details/inner-components/update-package/update-package.component";
import {
  DeletePackageComponent
} from "./components/package-details/inner-components/delete-package/delete-package.component";





const routes: Routes = [
  { path: '', component: HomeComponent, children:[
      {path:'customer',component:CustomerComponent, children:[
           {path:'',redirectTo:'all',pathMatch:'full'},
          {path:'all',component:AllCustomerComponent},
          {path:'new',component:AddCustomerComponent},
          {path:'find',component:FindCustomerComponent},
          {path:'update',component:UpdateCustomerComponent},
          {path:'delete',component:DeleteCustomerComponent}]},
      {path:'vehicle',component:VehicleComponent,children:[
          {path: '',redirectTo: "all" , pathMatch:"full" },
          {path: 'new',component:AddVehicleComponent },
          {path: 'all',component:AllVehicleComponent },
          {path: 'find',component:FindVehicleComponent },
          {path: 'update',component:UpdateVehicleComponent },
          {path: 'delete',component:DeleteVehicleComponent },
        ]},
      {path:'driver',component:DriverComponent,children:[
          {path: '',redirectTo: "all" , pathMatch:"full" },
          {path: 'new',component:AddDriverComponent },
          {path: 'all',component:AllDriverComponent },
          {path: 'find',component:FindDriverComponent },
          {path: 'update',component:UpdateDriverComponent },
          {path: 'delete',component:DeleteDriverComponent },
        ]},
      {path:'guide',component:GuideComponent,children:[
          {path: '',redirectTo: "all" , pathMatch:"full" },
          {path: 'new',component:AddGuideComponent },
          {path: 'all',component:AllGuideComponent },
          {path: 'find',component:FindGuideComponent },
          {path: 'update',component:UpdateGuideComponent },
          {path: 'delete',component:DeleteGuideComponent },
        ]},
      {path:'hotel',component:HotelComponent,children:[
          {path: '',redirectTo: "all" , pathMatch:"full" },
          {path: 'new',component:AddHotelComponent },
          {path: 'all',component:AllHotelComponent },
          {path: 'find',component:FindHotelComponent },
          {path: 'update',component:UpdateHotelComponent },
          {path: 'delete',component:DeleteHotelComponent },
        ]},
      {path:'package/details',component:PackageDetailsComponent,children:[
          {path: '',redirectTo: "all" , pathMatch:"full" },
          {path: 'new',component:AddPackageComponent },
          {path: 'all',component:AllPackageComponent },
          {path: 'find',component:FindPackageComponent },
          {path: 'update',component:UpdatePackageComponent },
          {path: 'delete',component:DeletePackageComponent },
        ]},

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
