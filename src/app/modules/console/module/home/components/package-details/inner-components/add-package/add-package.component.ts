import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {HotelService} from "../../../../../../../../service/hotel.service";
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent{

  constructor(private vehicleService:VehicleService,private hotelService:HotelService,
              private packageService:PackageDetailsService) {
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
        if(res.data!=null){
          this.hotelDataList=res.data
          console.log(this.hotelDataList)
        }else {
          this.list=[]
        }

      })



    }else if(this.form.value.category==='mid_level'){
      this.vehicleService.findAllDataVehicleStatesFalseCategory("midRange").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('3_Star_and_4_Star').subscribe(res=>{
        if(res.data!=null){
          this.hotelDataList=res.data
          console.log(this.hotelDataList)
        }else {
          this.list=[]
        }
      })


    }else  if (this.form.value.category==='luxury'){

      this.vehicleService.findAllDataVehicleStatesFalseCategory("luxury").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('4_Star_and_5_Star').subscribe(res=>{
        if(res.data!=null){
          this.hotelDataList=res.data
          console.log(this.hotelDataList)
        }else {
          this.list=[]
        }
      })



    }else if(this.form.value.category==='super_Luxury') {
      this.vehicleService.findAllDataVehicleStatesFalseCategory("superLuxury").subscribe(res=>{
        this.list=res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('5_Star').subscribe(res=>{
        if(res.data!=null){
          this.hotelDataList=res.data
          console.log(this.hotelDataList)
        }else {
          this.list=[]
        }
      })


    }



  }

  hotelPriceList:Array<any>=[]
  findHotel(id:any){
    this.hotelService.findId(id).subscribe(res=>{
     this.hotelPriceList=res.data
      console.log(this.hotelPriceList)
    })
  }


  crateData(){
    console.log(this.hotelData)
    console.log(this.vehicleData)

    const category:any = this.form.get('category')?.value;
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    const days = this.form.get('days')?.value;
    const night = this.form.get('night')?.value;
    const packageTravelArea = this.form.get('packageTravelArea')?.value;
    const packageNoAdult = this.form.get('packageNoAdult')?.value;
    const packageNoChildren = this.form.get('packageNoChildren')?.value;
    const packageTotalHeadCount = this.form.get('packageTotalHeadCount')?.value;
    const withPetOrNo = this.form.get('withPetOrNo')?.value;
   const  packageValue = this.form.get('packageValue')?.value;


    let setData = new FormData();
    setData.append('category', category!)
    setData.append('startDate', startDate!)
    setData.append('endDate', endDate!)
    setData.append('days', days!)
    setData.append('night', night!)
    setData.append('packageTravelArea', packageTravelArea!)
    setData.append('packageNoAdult', packageNoAdult!)
    setData.append('packageNoChildren', packageNoChildren!)
    setData.append('packageTotalHeadCount', packageTotalHeadCount!)
    setData.append('withPetOrNo', withPetOrNo!)
    setData.append('packageValue', packageValue!)
    setData.append('hotel', this.hotelData!)
    setData.append('vehicle', this.vehicleData!)


    this.packageService.save(setData).subscribe(res=>{
      alert('save package')
    })

  }


}
