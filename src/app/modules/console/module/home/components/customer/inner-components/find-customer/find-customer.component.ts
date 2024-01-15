import { Component } from '@angular/core';
import {CustomerService} from "../../../../../../../../service/customer.service";

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.scss']
})
export class FindCustomerComponent {

  constructor(private service:CustomerService) {
  }



  nicFront=''
  nicBack=''
  profile=''

  searchId='';

  list:Array<any>=[]
  findData(){
    this.service.findEmail(this.searchId).subscribe(res=>{
      /*   this.list.push(res.data.userId)
         this.list.push(res.data.username)*/

      this.  list=res

      console.log(this.list)

    })
  }
}
