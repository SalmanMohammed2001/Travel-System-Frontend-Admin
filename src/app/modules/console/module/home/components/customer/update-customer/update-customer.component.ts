import { Component } from '@angular/core';
import {CustomerService} from "../../../../../../../service/customer.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent {

  constructor(private service:CustomerService) {
  }

  searchId=''

  loadData(){

  }

}
