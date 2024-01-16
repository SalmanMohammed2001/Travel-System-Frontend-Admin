import { Component } from '@angular/core';
import {GuideService} from "../../../../../../../../service/guide.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-guide',
  templateUrl: './update-guide.component.html',
  styleUrls: ['./update-guide.component.scss']
})
export class UpdateGuideComponent {


  constructor(private  service:GuideService) {

  }


  list1:Array<any>=[]
  findGuide(event:any){
    this.service.findById(event.target.value).subscribe(res=>{
      this.list1=res.data
     this.form.patchValue({
      guideId:res.data[0].guideId,
       guideName:res.data[0].guideName,
       guideAddress:res.data[0].guideAddress,
       guideContact:res.data[0].guideContact,
       guideBirthDate:res.data[0].guideBirthDate,
       guideManDayValue:res.data[0].guideManDayValue,
       guideExperience:res.data[0].guideExperience,
       guideStatus:res.data[0].guideStatus,
     })

    })
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
    guideId:new FormControl('',[Validators.required]),
    guideName:new FormControl('',[Validators.required]),
    guideAddress:new FormControl('',[Validators.required]),
    guideContact:new FormControl('',[Validators.required]),
    guideBirthDate:new FormControl('',[Validators.required]),
    guideManDayValue:new FormControl('',[Validators.required]),
    guideExperience:new FormControl('',[Validators.required]),
    guideStatus:new FormControl('',[Validators.required]),

    guideIdFrontImage:new FormControl('',[Validators.required]),
    guideIdRearImage:new FormControl('',[Validators.required]),
    guideNicFrontImag:new FormControl('',[Validators.required]),
    guideNicRearImage:new FormControl('',[Validators.required]),
    guideProfilePicImage:new FormControl('',[Validators.required]),

  })

  createData(){
    let guideId=this.form.get('guideId')?.value;
    let guideName=this.form.get('guideName')?.value;
    let guideAddress=this.form.get('guideAddress')?.value;
    let guideContact=this.form.get('guideContact')?.value;
    let guideBirthDate=this.form.get('guideBirthDate')?.value;
    let guideManDayValue=this.form.get('guideManDayValue')?.value;
    let guideExperience=this.form.get('guideExperience')?.value;
    let guideStatus=this.form.get('guideStatus')?.value;

    let guideIdFrontImage:any=this.form.get('guideIdFrontImage')?.value;
    let guideIdRearImage:any=this.form.get('guideIdRearImage')?.value;
    let guideNicFrontImag:any=this.form.get('guideNicFrontImag')?.value;
    let guideNicRearImage:any=this.form.get('guideNicRearImage')?.value;
    let guideProfilePicImage:any=this.form.get('guideProfilePicImage')?.value;


    if(!guideIdFrontImage){

      // @ts-ignore
      let  img1=  document.getElementById('guideIdFrontImage-img-show').src
      guideIdFrontImage= this.dataURLtoFile(img1,'guideIdFrontImage-img-show_jpg')

    }
    if(!guideIdRearImage){
      // @ts-ignore
      let img2=document.getElementById('guideIdRearImage-img-show').src
      guideIdRearImage=this.dataURLtoFile(img2,'guideIdRearImage_img_show_jpg')

    }

    if(!guideNicFrontImag){
      // @ts-ignore
      let img3=document.getElementById('guideNicFrontImag-img-show').src
      guideNicFrontImag=this.dataURLtoFile(img3,'guideNicFrontImag_img-show_jpg')

    }

    if(!guideNicRearImage){
      // @ts-ignore
      let img3=document.getElementById('guideNicRearImage-img-show').src
      guideNicRearImage=this.dataURLtoFile(img3,'guideNicRearImage_img-show_jpg')

    }
    if(!guideProfilePicImage){
      // @ts-ignore
      let img3=document.getElementById('guideProfilePicImage-img-show').src
      guideProfilePicImage=this.dataURLtoFile(img3,'guideProfilePicImage_img-show_jpg')

    }




    const setData= new FormData()
    setData.append('guideId',guideId!)
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
    setData.append('guideStatus',guideStatus!)




    this.service.update(setData).subscribe(res=>{
      alert('update update')
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
