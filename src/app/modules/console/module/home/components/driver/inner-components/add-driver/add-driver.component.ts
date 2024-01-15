import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DriverService} from "../../../../../../../../service/driver.service";
import {VehicleService} from "../../../../../../../../service/vehicle.service";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit{

  constructor(private  service:DriverService,private  vehicleService:VehicleService) {

  }


  list:Array<any>=[]


  ngOnInit(): void {
this.findAllDataVehicleStatesFalse()
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
    driverName:new FormControl('',[Validators.required]),
    driverContact:new FormControl('',[Validators.required]),
    driverNic:new FormControl('',[Validators.required]),
    vehicleId:new FormControl('',[Validators.required]),
    driverImage:new FormControl('',[Validators.required]),
    licenseImageFront:new FormControl('',[Validators.required]),
    licenseImageRear:new FormControl('',[Validators.required]),

  })

  createData(){
    let driverName=this.form.get('driverName')?.value;
    let driverContact=this.form.get('driverContact')?.value;
    let driverNic=this.form.get('driverNic')?.value;
    let driverImage=this.form.get('driverImage')?.value;
    let licenseImageFront=this.form.get('licenseImageFront')?.value;
    let licenseImageRear=this.form.get('licenseImageRear')?.value;
    let vehicleId=this.form.get('vehicleId')?.value;


    console.log(driverImage)
    console.log(licenseImageFront)
    console.log(licenseImageRear)
    console.log(vehicleId)
    console.log(driverContact)
    console.log(driverNic)
    console.log(driverName)

    const setData= new FormData()
    setData.append('driverName',driverName!)
    setData.append('driverContact',driverContact!)
    setData.append('driverNic',driverNic!)
    setData.append('driverImage',driverImage!)
    setData.append('licenseImageFront',licenseImageFront!)
    setData.append('licenseImageRear',licenseImageRear!)
    setData.append('vehicleId',vehicleId!)




    this.service.save(setData).subscribe(res=>{
      alert('save data')
    })
  }






}
