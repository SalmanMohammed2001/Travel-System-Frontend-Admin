import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleService} from "../../../../../../../../service/vehicle.service";

@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.scss']
})
export class AllVehicleComponent implements OnInit {

  constructor(private service: VehicleService) {
  }

  ngOnInit(): void {
    this.findAll()
  }


  list: Array<any> = []

  findAll() {
    this.service.findAll().subscribe(res => {
      this.list = res.data
      console.log(this.list)
    })
  }
  list2: Array<any> = []
  findId(id:any){
    this.service.findById(id).subscribe(res=>{
      this.list2=res
    })
  }

}
