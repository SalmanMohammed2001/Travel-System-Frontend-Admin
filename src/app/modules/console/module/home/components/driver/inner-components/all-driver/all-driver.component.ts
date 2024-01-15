import {Component, OnInit} from '@angular/core';
import {DriverService} from "../../../../../../../../service/driver.service";

@Component({
  selector: 'app-all-driver',
  templateUrl: './all-driver.component.html',
  styleUrls: ['./all-driver.component.scss']
})
export class AllDriverComponent implements OnInit {

  constructor(private service:DriverService) {
  }
  ngOnInit(): void {
    this.findAll()
  }

  list:Array<any>=[]

  findAll(){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
      console.log(this.list)
    })
  }

  list2:Array<any>=[]
  findNic(nic:string){
  this.service.findNic(nic).subscribe(res=>{
    // console.log(res.data)
    this.list2=res
    console.log(this.list2)
  })
  }


}
