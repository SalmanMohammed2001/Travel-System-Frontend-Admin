import { Component } from '@angular/core';
import {DriverService} from "../../../../../../../../service/driver.service";
import {VehicleService} from "../../../../../../../../service/vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuideService} from "../../../../../../../../service/guide.service";

@Component({
  selector: 'app-add-guide',
  templateUrl: './add-guide.component.html',
  styleUrls: ['./add-guide.component.scss']
})
export class AddGuideComponent {

  constructor(private  service:GuideService) {

  }







  guideIdFrontImage(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({guideIdFrontImage:file})
  }

  guideIdRearImage(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({guideIdRearImage:file})
  }
  guideNicFrontImag(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({guideNicFrontImag:file})
  }
  guideNicRearImage(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({guideNicRearImage:file})
  }
  guideProfilePicImage(event:any){
    let  file=event.target.files[0]
    this.form.patchValue({guideProfilePicImage:file})
  }

  form=new FormGroup({
    guideName:new FormControl('',[Validators.required]),
    guideAddress:new FormControl('',[Validators.required]),
    guideContact:new FormControl('',[Validators.required]),
    guideBirthDate:new FormControl('',[Validators.required]),
    guideManDayValue:new FormControl('',[Validators.required]),
    guideExperience:new FormControl('',[Validators.required]),

    guideIdFrontImage:new FormControl('',[Validators.required]),
    guideIdRearImage:new FormControl('',[Validators.required]),
    guideNicFrontImag:new FormControl('',[Validators.required]),
    guideNicRearImage:new FormControl('',[Validators.required]),
    guideProfilePicImage:new FormControl('',[Validators.required]),

  })

  createData(){
    let guideName=this.form.get('guideName')?.value;
    let guideAddress=this.form.get('guideAddress')?.value;
    let guideContact=this.form.get('guideContact')?.value;
    let guideBirthDate=this.form.get('guideBirthDate')?.value;
    let guideManDayValue=this.form.get('guideManDayValue')?.value;
    let guideExperience=this.form.get('guideExperience')?.value;

    let guideIdFrontImage=this.form.get('guideIdFrontImage')?.value;
    let guideIdRearImage=this.form.get('guideIdRearImage')?.value;
    let guideNicFrontImag=this.form.get('guideNicFrontImag')?.value;
    let guideNicRearImage=this.form.get('guideNicRearImage')?.value;
    let guideProfilePicImage=this.form.get('guideProfilePicImage')?.value;




    const setData= new FormData()
    setData.append('guideName',guideName!)
    setData.append('guideAddress',guideAddress!)
    setData.append('guideContact',guideContact!)
    setData.append('guideBirthDate',guideBirthDate!)
    setData.append('guideManDayValue',guideManDayValue!)
    setData.append('guideExperience',guideExperience!)
    setData.append('guideIdFrontImage',guideIdFrontImage!)
    setData.append('guideIdRearImage',guideIdRearImage!)
    setData.append('guideNicFrontImag',guideNicFrontImag!)
    setData.append('guideNicRearImage',guideNicRearImage!)
    setData.append('guideProfilePicImage',guideProfilePicImage!)




    this.service.save(setData).subscribe(res=>{
      alert('save data')
    })
  }






}
