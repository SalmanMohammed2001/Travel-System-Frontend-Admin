import { Component } from '@angular/core';
import {VehicleService} from "../../../../../../../../service/vehicle.service";

@Component({
  selector: 'app-find-vehicle',
  templateUrl: './find-vehicle.component.html',
  styleUrls: ['./find-vehicle.component.scss']
})
export class FindVehicleComponent {

  constructor(private service:VehicleService) {
  }

  searchId=''


  list:Array<any>=[]

  findData(){
    this.service.findById(this.searchId).subscribe(res=>{
      this.list=res

    })
  }
}
