import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../../../../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit{

  constructor(private service:CustomerService) {
  }
  ngOnInit(): void {
  }


  email=''

  list:Array<any>=[]

  profilePic=''

  findData(event:any){
    this.service.findEmail(event.target.value).subscribe(res=>{
    this.form.patchValue({
        userId:res[0].userId,
        username:res[0].username,
        password:res[0].password,
        nic:res[0].nic,
        dob:res[0].dob,
        gender:res[0].gender,
        contact1:res[0].contact.contact1,
        contact2:res[0].contact.contact2,
        email:res[0].email,
        address:res[0].address,
      })
      this.list=res
    })


  }


  image1(event:any){
    let file=event.target.files[0]

    console.log(file)
    this.form.patchValue({profilePic:file})
  }
  image2(event:any){
    const file=event.target.files[0]
    this.form.patchValue({nicFrontImg:file})

  }
  image3(event:any){
    const file=event.target.files[0]
    this.form.patchValue({nicRearImg:file})

  }

  form=new FormGroup({
    userId:new FormControl(''),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    nic:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    contact1:new FormControl('',[Validators.required]),
    contact2:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    nicFrontImg:new FormControl('',[Validators.required]),
    nicRearImg:new FormControl('',[Validators.required]),
    profilePic:new FormControl('',[Validators.required]),
  })







  updateData(){
    let username=this.form.get('username')?.value;
    let  password=this.form.get('password')?.value;
    let nic=this.form.get('nic')?.value;
    let dob=this.form.get('dob')?.value;
    let  gender=this.form.get('gender')?.value;
    let contact1=this.form.get('contact1')?.value;
    let contact2=this.form.get('contact2')?.value;
    let email=this.form.get('email')?.value;
    let address=this.form.get('address')?.value;
    let nicFrontImg:any=this.form.get('nicFrontImg')?.value;
    let nicRearImg:any=this.form.get('nicRearImg')?.value;
    let profilePic:any=this.form.get('profilePic')?.value


      if(!profilePic){
     // @ts-ignore
        let  img1=  document.getElementById('profilePic-img-show').src
        profilePic= this.dataURLtoFile(img1,'profilePic-img_jpg')
      }
      if(!nicFrontImg){
        // @ts-ignore
        let img2=document.getElementById('nicFront-img-show').src
          nicFrontImg=this.dataURLtoFile(img2,'nicFront-img-jpg')

      }

    if(!nicRearImg){
      // @ts-ignore
      let img3=document.getElementById('nicRear-img-show').src
      nicRearImg=this.dataURLtoFile(img3,'nicRear-img-jpg')

    }

    let setData = new FormData()
    setData.append('username',username!)
    setData.append('password',password!)
    setData.append('nic',nic!)
    setData.append('dob',dob!)
    setData.append('gender',gender!)
    setData.append('contact1',contact1!)
    setData.append('contact2',contact2!)
    setData.append('email',email!)
    setData.append('address',address!)
    setData.append('nicFrontImg',nicFrontImg!)
    setData.append('nicRearImg',nicRearImg!)
    setData.append('profilePic',profilePic!)

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
