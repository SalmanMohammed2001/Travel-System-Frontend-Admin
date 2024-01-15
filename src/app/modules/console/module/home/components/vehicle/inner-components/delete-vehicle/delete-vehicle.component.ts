import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../../../../../../service/vehicle.service";

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.scss']
})
export class DeleteVehicleComponent  implements OnInit{

  constructor(private service:VehicleService) {
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

  delete(id:any){

    if(confirm('ate you want  to delete' + id)){
      this.service.delete(id).subscribe(res=>{
        alert('delete')
        this.findAll()
      })
    }

  }
}
