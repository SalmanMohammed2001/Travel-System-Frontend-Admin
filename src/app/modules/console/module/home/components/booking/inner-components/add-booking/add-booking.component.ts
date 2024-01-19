import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../../../../../../../../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements  OnInit{

  constructor(private  customerService:CustomerService,private packageService:PackageDetailsService) {
  }

  ngOnInit(): void {
    this.AllCustomerDetails()
    this.AllPackageDetail()
  }


  model: NgbDateStruct | undefined;

  save(){
    let date=this.model?.year+"/"+this.model?.month+"/"+this.model?.day;
    console.log(date)

  }

  customerList:Array<any>=[]
  AllCustomerDetails  (){
    this.customerService.findAll().subscribe(res=>{
      this.customerList=res.data

    })
  }

  customerData=''
  packageData=''

  // @ts-ignore
  loadAllCustomer(event:any){

    let email=event.target.value

    if(email ==="null"){
      return ""
    }else {
      this.customerService.findEmail(email).subscribe(res=>{
       this.form.patchValue({
         customerName:res[0].username,
         customerContact:res[0].contact.contact1,
         customerAddress:res[0].address,

       })
      })
    }

  }

  packageDetailsList:Array<any>=[]
  AllPackageDetail(){
    this.packageService.findAll().subscribe(res=>{
      this.packageDetailsList=res.data
      console.log(this.packageDetailsList)
    })
  }

  findPackageList:Array<any>=[]
  // @ts-ignore
  loadAllPackage(event:any){
  let  packageId=event.target.value

    if(packageId ==="null"){
      return ""
    }else {
      this.packageService.findId(packageId).subscribe(res=>{
        this.findPackageList=res.data
        console.log(this.findPackageList)
      })
    }


  }




















  form=new FormGroup({
    customerName: new FormControl('', [Validators.required]),
    customerContact: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required]),
  })
}
