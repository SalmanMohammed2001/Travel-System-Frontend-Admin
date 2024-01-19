import { Component } from '@angular/core';
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {HotelService} from "../../../../../../../../service/hotel.service";
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.scss']
})
export class UpdatePackageComponent {
  constructor(private vehicleService: VehicleService, private hotelService: HotelService,
              private packageService: PackageDetailsService) {
  }


  list2:Array<any>=[]
  find(event:any){
    this.packageService.findId(event.target.value).subscribe(res=>{
      this.list2=res.data

      this.form.patchValue({
        packageId:res.data[0].packageId,
        category:res.data[0].category,
        startDate:res.data[0].travelDuration.startDate,
        endDate:res.data[0].travelDuration.endDate,
        days:res.data[0].travelDuration.days,
        night:res.data[0].travelDuration.night,
        packageTravelArea:res.data[0].packageTravelArea,
        packageNoAdult:res.data[0].packageNoAdult,
        packageNoChildren:res.data[0].packageNoChildren,
        packageTotalHeadCount:res.data[0].packageTotalHeadCount,
        withPetOrNo:res.data[0].withPetOrNo,
        packageValue:res.data[0].packageValue,
        packageStatus:res.data[0].packageStatus,
      })

      this.vehicleData =res.data[0].vehicle.vehicleId
      this.hotelData=res.data[0].hotel.hotelId

    })
  }



  vehicleData = ''

  hotelData = ''


  form = new FormGroup({
    packageId: new FormControl('', [Validators.required]),
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
    packageStatus: new FormControl('', [Validators.required]),


  })


  // @ts-ignore

  list: Array<any> = []
  hotelDataList: Array<any> = []

  loadRegular() {

    if (this.form.value.category === 'regular') {
      this.vehicleService.findAllDataVehicleStatesFalseCategory("economy").subscribe(res => {
        this.list = res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('3_Star_and_2_Star').subscribe(res => {
        this.hotelDataList = res.data
        console.log(this.hotelDataList)
      })


    } else if (this.form.value.category === 'mid_level') {
      this.vehicleService.findAllDataVehicleStatesFalseCategory("midRange").subscribe(res => {
        this.list = res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('3_Star_and_4_Star').subscribe(res => {
        this.hotelDataList = res.data
        console.log(this.hotelDataList)
      })


    } else if (this.form.value.category === 'luxury') {

      this.vehicleService.findAllDataVehicleStatesFalseCategory("luxury").subscribe(res => {
        this.list = res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('4_Star_and_5_Star').subscribe(res => {
        this.hotelDataList = res.data
        console.log(this.hotelDataList)
      })


    } else if (this.form.value.category === 'super_Luxury') {
      this.vehicleService.findAllDataVehicleStatesFalseCategory("superLuxury").subscribe(res => {
        this.list = res.data
        console.log(this.list)
      })

      this.hotelService.findHotelCategory('5_Star').subscribe(res => {
        this.hotelDataList = res.data
        console.log(this.hotelDataList)
      })


    }


  }

  hotelPriceList: Array<any> = []

  findHotel(id: any) {
    this.hotelService.findId(id).subscribe(res => {
      this.hotelPriceList = res.data
    })
  }


  crateData() {
    console.log(this.hotelData)
    console.log(this.vehicleData)

    const packageId: any = this.form.get('packageId')?.value;
    const category: any = this.form.get('category')?.value;
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    const days = this.form.get('days')?.value;
    const night = this.form.get('night')?.value;
    const packageTravelArea = this.form.get('packageTravelArea')?.value;
    const packageNoAdult = this.form.get('packageNoAdult')?.value;
    const packageNoChildren = this.form.get('packageNoChildren')?.value;
    const packageTotalHeadCount = this.form.get('packageTotalHeadCount')?.value;
    const withPetOrNo = this.form.get('withPetOrNo')?.value;
    const packageValue = this.form.get('packageValue')?.value;
    const packageStatus = this.form.get('packageStatus')?.value;


    let setData = new FormData();
    setData.append('packageId', packageId!)
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
    setData.append('packageStatus',packageStatus !)


    this.packageService.update(setData).subscribe(res => {
      alert('save package')
    })

  }

}
