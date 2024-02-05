import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../../../../../../service/booking.service";

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent implements OnInit{

  constructor(private bookingService:BookingService) {
  }

  ngOnInit(): void {
    this.findAll()
  }

  bookingList:Array<any>=[]
  findAll(){
    this.bookingService.findAll().subscribe(res=>{
      this.bookingList=res.data
    })
  }

  findBookingList:Array<any>=[]
  findBooking(id:any){
    this.bookingService.findId(id).subscribe(res=>{
     this.findBookingList=res.data[0].bookingDetailsLis
      console.log(this.findBookingList)
      //console.log(res.data.bookingDetailsLis)
    })
  }
}
