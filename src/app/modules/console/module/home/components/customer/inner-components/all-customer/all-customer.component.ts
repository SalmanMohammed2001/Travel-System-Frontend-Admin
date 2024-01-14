import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../../../../../../../../service/customer.service";


@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit{
  private modalService = inject(NgbModal);
  constructor( private service:CustomerService) {
  }
  ngOnInit(): void {
    this.findAllData()
  }


  list:Array<any>=[]



  findAllData  (){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
      console.log(this.list)
    })
  }

/*  nicFront=''
  nicBack=''
  profile=''*/

  list2:Array<any>=[]
  findData(email:any){
    this.service.findEmail(email).subscribe(res=>{
       this.list2=res
      console.log(this.list2)

    })

  }

}
