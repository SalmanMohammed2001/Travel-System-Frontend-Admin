import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../../../../../../../../service/customer.service";


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements  OnInit{

  constructor(private  customerService:CustomerService) {
  }

  ngOnInit(): void {
    this.findAllCustomer()
  }


  model: NgbDateStruct | undefined;

  save(){
    let date=this.model?.year+"/"+this.model?.month+"/"+this.model?.day;
    console.log(date)

  }

  customerList:Array<any>=[]
  findAllCustomer  (){
    this.customerService.findAll().subscribe(res=>{
      this.customerList=res.data
      console.log(this.customerList)
    })
  }

  customerData=''

  loadAllCustomer(event:any){
    let email=event.target.value


     this.customerService.findEmail(email).subscribe(res=>{
       console.log(res)
     })
  }

}
