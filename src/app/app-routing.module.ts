import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/security/components/login/login.component";

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
