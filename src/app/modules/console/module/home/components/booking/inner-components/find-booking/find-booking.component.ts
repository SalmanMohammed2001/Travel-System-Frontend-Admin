import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../../../../../../service/booking.service";

@Component({
  selector: 'app-find-booking',
  templateUrl: './find-booking.component.html',
  styleUrls: ['./find-booking.component.scss']
})
export class FindBookingComponent {

  constructor(private bookingService:BookingService) {
  }


  searchId='';

  bookingList:Array<any>=[]
  list:Array<any>=[]
  findBooking(){
    this.bookingService.findId(this.searchId).subscribe(res=>{
      this.bookingList=res.data[0].bookingDetailsLis
      this.list=res.data
      console.log(res.data[0].bookingDetailsLis)
    })
  }

}
