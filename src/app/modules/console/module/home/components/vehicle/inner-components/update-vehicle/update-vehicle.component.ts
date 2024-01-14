import { Component } from '@angular/core';
import {VehicleService} from "../../../../../../../../service/vehicle.service";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent {

  constructor(private service:VehicleService) {
  }

  searchId=''


  list:Array<any>=[]

  findData(){
    this.service.findById(this.searchId).subscribe(res=>{
      this.list=res
      console.log(this.list)
    })
  }

}
