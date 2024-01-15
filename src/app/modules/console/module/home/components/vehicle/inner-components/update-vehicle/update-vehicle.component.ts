import { Component } from '@angular/core';
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.scss']
})
export class UpdateVehicleComponent {

  constructor(private service:VehicleService) {
  }

  searchId=''


  list:Array<any>=[]

  findData(){
    this.service.findById(this.searchId).subscribe(res=>{
      this.form.patchValue({
        vehicleId:res[0].vehicleId,
        vehicleName:res[0].vehicleName,
        vehicleCategory:res[0].vehicleCategory,
        vehicleFuelType:res[0].vehicleFuelType,
        vehicleHybrid:res[0].vehicleHybrid,
        vehicleType:res[0].vehicleType,
        vehicleTransmission:res[0].vehicleTransmission,
        vehicleSeatCapacity:res[0].vehicleSeatCapacity,
        vehicleFuelUsage:res[0].vehicleFuelUsage,
        vehiclePriceFor1Km:res[0].vehiclePriceFor1Km,
        vehiclePriceFor100Km:res[0].vehiclePriceFor100Km,
        vehicleQty:res[0].vehicleQty,
        // vId:res[0].vehicleName
      })
      this.list=res
    })
  }


  FrontView(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({frontView:file})
  }
  RearView(event:any){
    const file=event.target.files[0]
    this.form.patchValue({rearView:file})
  }
  FontInterior(event:any){
    const file=event.target.files[0]
    this.form.patchValue({fontInterior:file})
  }
  /* RearInterior(event:any){
     const file=event.target.files[0]
     this.form.patchValue({rearInterior:file})
   }*/

  form=new FormGroup({
    vehicleId:new FormControl('',[Validators.required]),
    vehicleName:new FormControl('',[Validators.required]),
    vehicleCategory:new FormControl('',[Validators.required]),
    vehicleFuelType:new FormControl('',[Validators.required]),
    vehicleHybrid:new FormControl('',[Validators.required]),
    vehicleType:new FormControl('',[Validators.required]),
    vehicleTransmission:new FormControl('',[Validators.required]),
    vehicleSeatCapacity:new FormControl('',[Validators.required]),
    vehicleFuelUsage:new FormControl('',[Validators.required]),
    vehiclePriceFor1Km:new FormControl('',[Validators.required]),
    vehiclePriceFor100Km:new FormControl('',[Validators.required]),
    vehicleQty:new FormControl('',[Validators.required]),
    frontView:new FormControl('',[Validators.required]),
    rearView:new FormControl('',[Validators.required]),
    fontInterior:new FormControl('',[Validators.required]),
    // rearInterior:new FormControl('',[Validators.required]),

  })


  updateDta(){
    let vehicleId=this.form.get('vehicleId')?.value;
    let vehicleName=this.form.get('vehicleName')?.value;
    let  vehicleCategory=this.form.get('vehicleCategory')?.value;
    let vehicleFuelType=this.form.get('vehicleFuelType')?.value;
    let vehicleHybrid=this.form.get('vehicleHybrid')?.value;
    let  vehicleType=this.form.get('vehicleType')?.value;
    let vehicleTransmission=this.form.get('vehicleTransmission')?.value;
    let vehicleSeatCapacity=this.form.get('vehicleSeatCapacity')?.value;
    let vehicleFuelUsage=this.form.get('vehicleFuelUsage')?.value;
    let vehiclePriceFor1Km=this.form.get('vehiclePriceFor1Km')?.value;
    let vehiclePriceFor100Km=this.form.get('vehiclePriceFor100Km')?.value;
    let vehicleQty=this.form.get('vehicleQty')?.value;
    let frontView:any=this.form.get('frontView')?.value
    let rearView:any=this.form.get('rearView')?.value
    let fontInterior:any=this.form.get('fontInterior')?.value


    if(!frontView){

      // @ts-ignore
      let  img1=  document.getElementById('frontView-img-show').src
      frontView= this.dataURLtoFile(img1,'frontView-img-show_jpg')

    }
    if(!rearView){
      // @ts-ignore
      let img2=document.getElementById('rearView-img-show').src
      rearView=this.dataURLtoFile(img2,'rearView-img-show_jpg')

    }

    if(!fontInterior){
      // @ts-ignore
      let img3=document.getElementById('fontInterior-img-show').src
      fontInterior=this.dataURLtoFile(img3,'fontInterior-img-show_jpg')

    }




    let setData = new FormData()
    setData.append('vehicleId',vehicleId!)
    setData.append('vehicleName',vehicleName!)
    setData.append('vehiclePriceFor1Km',vehiclePriceFor1Km!)
    setData.append('vehicleCategory',vehicleCategory!)
    setData.append('vehicleType',vehicleType!)
    setData.append('vehiclePriceFor100Km',vehiclePriceFor100Km!)
    setData.append('vehicleFuelType',vehicleFuelType!)
    setData.append('vehicleSeatCapacity',vehicleSeatCapacity!)
    setData.append('vehicleFuelUsage',vehicleFuelUsage!)
    setData.append('vehicleHybrid',vehicleHybrid!)
    setData.append('vehicleTransmission',vehicleTransmission!)
    setData.append('vehicleQty',vehicleQty!)
    setData.append('vehicleImages',frontView!)
    setData.append('vehicleImages',rearView!)
    setData.append('vehicleImages',fontInterior!)




    this.service.update(setData).subscribe(res=>{
      alert('update')
    })

  }

  dataURLtoFile(dataurl:any, filename:any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }


}
