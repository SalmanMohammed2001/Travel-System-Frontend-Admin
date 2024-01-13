import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../../../../../service/post.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{

  constructor(private  service:PostService,private http:HttpClient) {
  }
  ngOnInit(): void {

  }


  form=new FormGroup({
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


  image1(event:any){
    const file=event.target.files[0]
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


  createData(){
    console.log(this.form)
    let username=this.form.get('username')?.value;
    let  password=this.form.get('password')?.value;
    let nic=this.form.get('nic')?.value;
    let dob=this.form.get('dob')?.value;
    let  gender=this.form.get('gender')?.value;
    let contact1=this.form.get('contact1')?.value;
    let contact2=this.form.get('contact2')?.value;
    let email=this.form.get('email')?.value;
    let address=this.form.get('address')?.value;
    let nicFrontImg=this.form.get('nicFrontImg')?.value;
    let nicRearImg=this.form.get('nicRearImg')?.value;
    let profilePic=this.form.get('profilePic')?.value


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

    this.http.post<any>('http://localhost:8081/api/v1/users',setData).subscribe(res=>{
      console.log(res)
      alert('save')
    })


  }



}
