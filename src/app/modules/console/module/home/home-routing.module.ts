import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {AllCustomerComponent} from "./components/customer/all-customer/all-customer.component";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";
import {FindCustomerComponent} from "./components/customer/find-customer/find-customer.component";
import {UpdateCustomerComponent} from "./components/customer/update-customer/update-customer.component";

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
      {path:'customer',component:CustomerComponent, children:[
          {path:'',redirectTo:'all',pathMatch:'full'},
          {path:'all',component:AllCustomerComponent},
          {path:'new',component:AddCustomerComponent},
          {path:'find',component:FindCustomerComponent},
          {path:'update',component:UpdateCustomerComponent},
        ]}
    ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
