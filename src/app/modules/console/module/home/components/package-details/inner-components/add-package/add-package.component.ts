import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {HotelService} from "../../../../../../../../service/hotel.service";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent{

  constructor(private vehicleService:VehicleService,private hotelService:HotelService) {
  }

  vehicleData=''

  hotelData=''






  form = new FormGroup({
    category: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    days: new FormControl('', [Validators.required]),
    night: new FormControl('', [Validators.required]),
    packageTravelArea: new FormControl('', [Validators.required]),
    packageNoAdult: new FormControl('', [Validators.required]),
    packageNoChildren: new FormControl('', [Validators.required]),
    packageTotalHeadCount: new FormControl('', [Validators.required]),
    withPetOrNo: new FormControl('', [Validators.required]),
    packageValue: new FormControl('', [Validators.required]),



  })

  category:any = this.form.get('category')?.value;
  startDate = this.form.get('startDate')?.value;
  endDate = this.form.get('endDate')?.value;
  days = this.form.get('days')?.value;
  night = this.form.get('night')?.value;
  packageTravelArea = this.form.get('packageTravelArea')?.value;
  packageNoAdult = this.form.get('packageNoAdult')?.value;
  packageNoChildren = this.form.get('packageNoChildren')?.value;
  packageTotalHeadCount = this.form.get('packageTotalHeadCount')?.value;
  withPetOrNo = this.form.get('withPetOrNo')?.value;
  packageValue = this.form.get('packageValue')?.value;




  // @ts-ignore

  list:Array<any>=[]
  hotelDataList:Array<any>=[]

  loadRegular() {

    if(this.form.value.category==='regular'){
      this.vehicleService.findAllDataVehicleStatesFalseCategory("economy").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('3_Star_and_2_Star').subscribe(res=>{
        this.hotelDataList=res.data
        console.log(this.hotelDataList)
      })



    }else if(this.form.value.category==='mid_level'){
      this.vehicleService.findAllDataVehicleStatesFalseCategory("midRange").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('3_Star_and_4_Star').subscribe(res=>{
        this.hotelDataList=res.data
        console.log(this.hotelDataList)
      })



    }else  if (this.form.value.category==='luxury'){

      this.vehicleService.findAllDataVehicleStatesFalseCategory("luxury").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('4_Star_and_5_Star').subscribe(res=>{
        this.hotelDataList=res.data
        console.log(this.hotelDataList)
      })




    }else if(this.form.value.category==='super_Luxury') {
      this.vehicleService.findAllDataVehicleStatesFalseCategory("superLuxury").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('5_Star').subscribe(res=>{
        this.hotelDataList=res.data
        console.log(this.hotelDataList)
      })



    }



  }



  crateData(){
 /*  let dataa=(this.myData)
    console.log(dataa)*/

  }


}
