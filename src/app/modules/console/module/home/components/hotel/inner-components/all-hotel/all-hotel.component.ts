import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../../../../../service/hotel.service";

@Component({
  selector: 'app-all-hotel',
  templateUrl: './all-hotel.component.html',
  styleUrls: ['./all-hotel.component.scss']
})
export class AllHotelComponent  implements OnInit{

  constructor(private  service:HotelService) {
  }

  list:Array<any>=[]

  ngOnInit(): void {
  this.findAll()

  }

  imageList:string=''
  findAll(){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
     /* for (let i = 0; i <this.list.length ; i++) {
        console.log(this.list[i].hotelFrontImage)
        console.log('--------------')
        // this.imageList=this.list[i].images
      }*/

      console.log(this.list)
    })
  }

  list2:Array<any>=[]
  findHotel(event:any){
    this.service.findId(event).subscribe(res=>{
     this.list2=res.data
      console.log(this.list2)
    })
  }
}
