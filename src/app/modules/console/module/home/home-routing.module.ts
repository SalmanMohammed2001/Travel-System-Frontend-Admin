import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {AllCustomerComponent} from "./components/customer/inner-components/all-customer/all-customer.component";
import {AddCustomerComponent} from "./components/customer/inner-components/add-customer/add-customer.component";
import {FindCustomerComponent} from "./components/customer/inner-components/find-customer/find-customer.component";
import {UpdateCustomerComponent} from "./components/customer/inner-components/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/customer/inner-components/delete-customer/delete-customer.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {SaveVehicleComponent} from "./components/vehicle/inner-components/save-vehicle/save-vehicle.component";
import {AllVehicleComponent} from "./components/vehicle/inner-components/all-vehicle/all-vehicle.component";
import {FindVehicleComponent} from "./components/vehicle/inner-components/find-vehicle/find-vehicle.component";

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
      {path:'customer',component:CustomerComponent, children:[
          {path:'',redirectTo:'all',pathMatch:'full'},
          {path:'all',component:AllCustomerComponent},
          {path:'new',component:AddCustomerComponent},
          {path:'find',component:FindCustomerComponent},
          {path:'update',component:UpdateCustomerComponent},
          {path:'delete',component:DeleteCustomerComponent}]},
      {path:'vehicle',component:VehicleComponent,children:[
          {path: '',redirectTo: "new" , pathMatch:"full" },
          {path: 'new',component:SaveVehicleComponent },
          {path: 'all',component:AllVehicleComponent },
          {path: 'find',component:FindVehicleComponent },
        ]}
    ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
