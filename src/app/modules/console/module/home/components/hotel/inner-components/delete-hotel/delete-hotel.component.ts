import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../../../../../service/hotel.service";

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.scss']
})
export class DeleteHotelComponent implements OnInit{

  constructor(private service:HotelService) {
  }

  list:Array<any>=[]

  ngOnInit(): void {
    this.findAll()

  }


  findAll(){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
    })
  }


  deleteHotel(id:any){

    if(confirm('ate you want  to delete' + id)){
      this.service.delete(id).subscribe(res=>{
        alert('delete')
        this.findAll()
      })
    }

  }
}
