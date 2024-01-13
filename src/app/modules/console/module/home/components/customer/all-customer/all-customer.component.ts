import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../../../../../service/post.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent implements OnInit{

  constructor(private  service:PostService,private http:HttpClient) {
  }
  ngOnInit(): void {
    this.findAllData()
  }


  list:Array<any>=[]


  findAllData  (){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
    })
  }
}
