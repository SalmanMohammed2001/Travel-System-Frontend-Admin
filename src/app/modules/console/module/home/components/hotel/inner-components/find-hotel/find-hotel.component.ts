import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../../../../../service/hotel.service";

// @ts-ignore
@Component({
  selector: 'app-find-hotel',
  templateUrl: './find-hotel.component.html',
  styleUrls: ['./find-hotel.component.scss']
})
export class FindHotelComponent  implements OnInit{

  constructor(private  service:HotelService) {
  }





  list2:Array<any>=[]
  findHotel(event:any){
    this.service.findId(event.target.value).subscribe(res=>{
      this.list2=res.data
      console.log(this.list2)
    })
  }



  ngOnInit(): void {
  }
}
