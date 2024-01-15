import {Component, OnInit} from '@angular/core';
import {DriverService} from "../../../../../../../../service/driver.service";
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss']
})
export class UpdateDriverComponent implements OnInit{

  constructor(private  service:DriverService,private  vehicleService:VehicleService) {

  }


  findDataList:Array<any>=[]

  findData(event:any){
    this.service.findNic(event.target.value).subscribe(res=>{
    this.form.patchValue({
       driverId:res[0].driverId,
       driverName:res[0].driverName,
       driverContact:res[0].driverContact,
       driverNic:res[0].driverNic,
      oldVehicleId:res[0].vehicle.vehicleId,
     })

       this.findAllDataVehicleStatesFalse()

      this.findDataList=res


    })
  }




  list:Array<any>=[]
 ngOnInit(): void {
   // this.findAllDataVehicleStatesFalse()
  }

  findAllDataVehicleStatesFalse(){
    this.vehicleService.findAllDataVehicleStatesFalse().subscribe(res=>{
      if(res.data===null){
        alert('empty vehicle')
      }else {

        this.list=res.data
      }
    })
  }


  driverImage(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({driverImage:file})
  }

  licenseImageFront(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({licenseImageFront:file})
  }
  licenseImageRear(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({licenseImageRear:file})
  }

  form=new FormGroup({
    driverId:new FormControl('',[Validators.required]),
    driverName:new FormControl('',[Validators.required]),
    driverContact:new FormControl('',[Validators.required]),
    driverNic:new FormControl('',[Validators.required]),
    vehicleId:new FormControl('',[Validators.required]),
    driverImage:new FormControl('',[Validators.required]),
    licenseImageFront:new FormControl('',[Validators.required]),
    licenseImageRear:new FormControl('',[Validators.required]),
    oldVehicleId:new FormControl('',[Validators.required]),

  })

  createData(){
    let driverId=this.form.get('driverId')?.value;
    let driverName=this.form.get('driverName')?.value;
    let driverContact=this.form.get('driverContact')?.value;
    let driverNic=this.form.get('driverNic')?.value;
    let driverImage:any=this.form.get('driverImage')?.value;
    let licenseImageFront:any=this.form.get('licenseImageFront')?.value;
    let licenseImageRear:any=this.form.get('licenseImageRear')?.value;
    let vehicleId:any=this.form.get('vehicleId')?.value;
    let oldVehicleId:any=this.form.get('oldVehicleId')?.value;




    if(!driverImage){

      // @ts-ignore
      let  img1=  document.getElementById('driverImage-img-show').src
      driverImage= this.dataURLtoFile(img1,'driverImage-img-show_jpg')

    }
    if(!licenseImageFront){
      // @ts-ignore
      let img2=document.getElementById('licenseImageFront-img-show').src
      licenseImageFront=this.dataURLtoFile(img2,'licenseImageFront_img-show_jpg')

    }

    if(!licenseImageRear){
      // @ts-ignore
      let img3=document.getElementById('licenseImageRear-img-show').src
      licenseImageRear=this.dataURLtoFile(img3,'licenseImageRear_img-show_jpg')

    }




    const setData= new FormData()
    setData.append('driverId',driverId!)
    setData.append('driverName',driverName!)
    setData.append('driverContact',driverContact!)
    setData.append('driverNic',driverNic!)
    setData.append('driverImage',driverImage!)
    setData.append('licenseImageFront',licenseImageFront!)
    setData.append('licenseImageRear',licenseImageRear!)
    setData.append('vehicleId',vehicleId!)
    setData.append('oldVehicleId',oldVehicleId!)




    this.service.update(setData).subscribe(res=>{
      alert('update data')
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
