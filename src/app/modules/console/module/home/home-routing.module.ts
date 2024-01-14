import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {AllCustomerComponent} from "./components/customer/all-customer/all-customer.component";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";
import {FindCustomerComponent} from "./components/customer/find-customer/find-customer.component";
import {UpdateCustomerComponent} from "./components/customer/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/customer/delete-customer/delete-customer.component";
import {VehicleComponent} from "./components/vehicle/vehicle.component";
import {SaveVehicleComponent} from "./components/vehicle/inner-components/save-vehicle/save-vehicle.component";
import {AllVehicleComponent} from "./components/vehicle/inner-components/all-vehicle/all-vehicle.component";

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
          {path: 'all',component:AllVehicleComponent }
        ]}
    ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
