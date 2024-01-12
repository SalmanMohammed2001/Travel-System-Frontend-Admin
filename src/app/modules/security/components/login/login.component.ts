import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router :Router) {
  }



  loadData(){
    /*if(this.email ==='sal@gmail.com' && this.password==='1234'){
      this.router.navigateByUrl('console')
    }*/

  }
}
