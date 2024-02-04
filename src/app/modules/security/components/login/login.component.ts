import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {first} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  constructor(private userService:UserService,private  router:Router,private authService:AuthService) {
  }

  form=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  login(){
    console.log(this.form)
    this.userService.login(
      this.form.get('email')?.value!,
      this.form.get('password')?.value!,
    ).pipe(first())
      .subscribe((data:HttpResponse<any>)=>{
        console.log(data.headers.get('Authorization'))
        this.authService.createCookie("myToken",data.headers.get('Authorization')!)
        this.router.navigateByUrl("/console/customer").then()
      },error => {

      })
  }


  loadData(){

  //    this.router.navigateByUrl('console')

  }
}
