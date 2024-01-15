import { Component } from '@angular/core';
import {DriverService} from "../../../../../../../../service/driver.service";

@Component({
  selector: 'app-find-driver',
  templateUrl: './find-driver.component.html',
  styleUrls: ['./find-driver.component.scss']
})
export class FindDriverComponent {

  constructor(private  service:DriverService) {

  }



  list:Array<any>=[]

  findData(event:any){
    this.service.findNic(event.target.value).subscribe(res=>{
      this.list=res

      console.log(this.list)
    })
  }


}
