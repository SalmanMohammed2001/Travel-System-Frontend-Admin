import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CustomerService} from "../../../../../../../../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";
import {HttpClient} from "@angular/common/http";
import {BookingService} from "../../../../../../../../service/booking.service";


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

  constructor(private bookingService: BookingService, private customerService: CustomerService, private packageService: PackageDetailsService,) {
  }

  ngOnInit(): void {
    this.AllCustomerDetails()
    this.AllPackageDetail()

  }


  model: NgbDateStruct | undefined;

  date = ''

  save() {


  }



  todayDate = new Date().toLocaleDateString();

  customerList: Array<any> = []

  AllCustomerDetails() {
    this.customerService.findAll().subscribe(res => {
      this.customerList = res.data

    })
  }

  customerData = ''
  packageData = ''

  // @ts-ignore
  loadAllCustomer(event: any) {

    let email = event.target.value


    if (email === "null") {
      return ""
    } else {
      this.customerService.findEmail(email).subscribe(res => {
        this.form.patchValue({
          customerId: res[0].userId,
          customerName: res[0].username,
          customerContact: res[0].contact.contact1,
          customerAddress: res[0].address,

        })
      })
    }

  }

  packageDetailsList: Array<any> = []

  AllPackageDetail() {
    this.packageService.findAll().subscribe(res => {
      this.packageDetailsList = res.data

    })
  }

  findPackageList: Array<any> = []

  // @ts-ignore
  loadAllPackage(event: any) {
    let packageId = event.target.value

    if (packageId === "null") {
      return ""
    } else {
      this.packageService.findId(packageId).subscribe(res => {
        this.findPackageList = res.data
        this.form.patchValue({
          packageId: res.data[0].packageId,
          packageCategory: res.data[0].category,
          packageStartDate: res.data[0].travelDuration.startDate,
          packageEndDate: res.data[0].travelDuration.endDate,
          packageValue: res.data[0].packageValue
        })
      })
    }


  }


  bankSlip(event: any) {
    const file = event.target.files[0]
    this.form.patchValue({
      bankSlip: file
    })
  }


  form = new FormGroup({
    customerId: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    customerContact: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required]),
    packageId: new FormControl('', [Validators.required]),
    packageCategory: new FormControl('', [Validators.required]),
    packageStartDate: new FormControl('', [Validators.required]),
    packageEndDate: new FormControl('', [Validators.required]),
    packageValue: new FormControl('', [Validators.required]),
    bankSlip: new FormControl('', [Validators.required]),

  })


  pk_category = '';
  st_date = '';
  ed_date = ''
  pk_value = 0

  cartArray: any[] = []

  addToCart() {

    let tempCardObject = {
      packageId: this.packageData,
      packageCategory: this.pk_category,
      packageStartDate: this.st_date,
      packageEndDate: this.ed_date,
      packageValue: this.pk_value

    }

    let rows = this.isExist(tempCardObject.packageId)
    if (rows != -1) {
      alert('al ready exist')
      return
    } else {
      this.cartArray.push(tempCardObject)

    }

  }


  isExist(data: any) {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].packageId === data) {
        return i
      }
    }
    return -1

  }

  /*  total=0
    setTotal(){
      this.cartArray.forEach(data=>{
        this.total+=data.packageValue
      })

    }*/

  remove(data: any) {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].packageId == data) {
        this.cartArray.splice(i, 1);
      }

    }
  }

  createData() {
    let customerId = this.form.get('customerId')?.value;
    let customerName = this.form.get('customerName')?.value;
    let customerContact = this.form.get('customerContact')?.value;
    let customerAddress = this.form.get('customerAddress')?.value;
    let packageId = this.form.get('packageId')?.value;
    let packageCategory = this.form.get('packageCategory')?.value;
    let packageStartDate = this.form.get('packageStartDate')?.value;
    let packageEndDate = this.form.get('packageEndDate')?.value;
    let packagePrice = this.form.get('packageValue')?.value;
    let bankSlipData = this.form.get('bankSlip')?.value;


    let total: number = 0;
    this.cartArray.forEach(data => {
      total += data.packageValue
    })


    let setData = new FormData();
    setData.append('bookingDate',   this.model?.year + "/" + this.model?.month + "/" + this.model?.day);

    // @ts-ignore
    setData.append('bookingPrice', total!);
    setData.append('bankSlip', bankSlipData!);
    setData.append('user', customerId!);
     setData.append('bookingDetails',JSON.stringify(this.cartArray))


    this.bookingService.create(setData).subscribe(res => {
      alert('save')
    })


  }
}
