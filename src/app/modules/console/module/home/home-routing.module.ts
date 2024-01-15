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

        ]}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
