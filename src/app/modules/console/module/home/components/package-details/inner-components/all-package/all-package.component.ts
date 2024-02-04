import {Component, OnInit} from '@angular/core';
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";
import {HotelService} from "../../../../../../../../service/hotel.service";

@Component({
  selector: 'app-all-package',
  templateUrl: './all-package.component.html',
  styleUrls: ['./all-package.component.scss']
})
export class AllPackageComponent implements OnInit{

  constructor(private packageService:PackageDetailsService,private  hotelService:HotelService) {
  }

  ngOnInit(): void {
  this.findAll()
  }

  list:Array<any>=[]
  findAll(){
    this.packageService.findAll().subscribe(res=>{
      this.list=res.data
      console.log(this.list)
    })
  }

  list2:Array<any>=[]
  findData(id:any){
    this.packageService.findId(id).subscribe(res=>{
      this.list2=res.data
      console.log(this.list2)
    })
  }


  listHotelArray:Array<any>=[]
  findHotel(id:any){
   this.hotelService.findId(id).subscribe(res=>{
     this.listHotelArray=res.data
      console.log(this.listHotelArray)

    })


  }


}
