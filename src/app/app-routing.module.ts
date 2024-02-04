import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/security/components/login/login.component";
import {routeGuard} from "./modules/console/guard/route.guard";

const routes: Routes = [
  {path:'',redirectTo:'security/login',pathMatch:'full'},
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule),canActivate:[routeGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
