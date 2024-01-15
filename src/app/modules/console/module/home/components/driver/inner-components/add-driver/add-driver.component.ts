import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent {

  constructor() {
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
    console.log(this.form)
  }


}
