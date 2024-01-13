import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {CustomerComponent} from "./components/customer/customer.component";
import {AllCustomerComponent} from "./components/customer/all-customer/all-customer.component";
import {AddCustomerComponent} from "./components/customer/add-customer/add-customer.component";

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
      {path:'customer',component:CustomerComponent, children:[
          {path:'',redirectTo:'all',pathMatch:'full'},
          {path:'all',component:AllCustomerComponent},
          {path:'new',component:AddCustomerComponent},
        ]}
    ] },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
