import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../../../../../../service/hotel.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.scss']
})
export class UpdateHotelComponent implements OnInit {

  constructor(private service:HotelService) {
  }

  ngOnInit(): void {
  }



  list2:Array<any>=[]
  findHotel(event:any){
    this.service.findId(event.target.value).subscribe(res=>{
      this.list2=res.data
    this.form.patchValue({
      hotelId:res.data[0].hotelId ,
      hotelName:res.data[0].hotelName ,
      hotelCategory:res.data[0].hotelCategory ,
      hotelAddress:res.data[0].hotelAddress ,
      hotelMapLink:res.data[0].hotelMapLink ,
      hotelEmail:res.data[0].hotelEmail ,
      contact1:res.data[0].hotelContact.contact1 ,
      contact2:res.data[0].hotelContact.contact2 ,
      hotelPetAllowed:res.data[0].hotelPetAllowed ,
      option1:res.data[0].hotelPrices[0].priceKey ,
      price1:res.data[0].hotelPrices[0].priceValue ,
      option2:res.data[0].hotelPrices[1].priceKey ,
      price2:res.data[0].hotelPrices[1].priceValue,
      option3:res.data[0].hotelPrices[2].priceKey ,
      price3:res.data[0].hotelPrices[2].priceValue ,
      option4:res.data[0].hotelPrices[3].priceKey,
      price4:res.data[0].hotelPrices[3].priceValue,
      hotelStatus:res.data[0].hotelStatus ,
    })
    })
  }



  img1(event: any) {
    let file = event.target.files[0]
    this.form.patchValue({hotelImage1: file})

  }

  img2(event: any) {
    let file = event.target.files[0]
    this.form.patchValue({hotelImage2: file})

  }

  img3(event: any) {
    let file = event.target.files[0]
    this.form.patchValue({hotelImage3: file})

  }

  img4(event: any) {
    let file = event.target.files[0]
    this.form.patchValue({hotelImage4: file})

  }

  img5(event: any) {
    let file = event.target.files[0]
    this.form.patchValue({hotelImage5: file})

  }

  form = new FormGroup({
    hotelId: new FormControl('', [Validators.required]),
    hotelName: new FormControl('', [Validators.required]),
    hotelCategory: new FormControl('', [Validators.required]),
    hotelAddress: new FormControl('', [Validators.required]),
    hotelMapLink: new FormControl('', [Validators.required]),
    hotelEmail: new FormControl('', [Validators.required]),
    contact1: new FormControl('', [Validators.required]),
    contact2: new FormControl('', [Validators.required]),
    hotelPetAllowed: new FormControl('', [Validators.required]),
    option1: new FormControl('', [Validators.required]),
    price1: new FormControl('', [Validators.required]),
    option2: new FormControl('', [Validators.required]),
    price2: new FormControl('', [Validators.required]),
    option3: new FormControl('', [Validators.required]),
    price3: new FormControl('', [Validators.required]),
    option4: new FormControl('', [Validators.required]),
    price4: new FormControl('', [Validators.required]),
    hotelImage1: new FormControl('', [Validators.required]),
    hotelImage2: new FormControl('', [Validators.required]),
    hotelImage3: new FormControl('', [Validators.required]),
    hotelImage4: new FormControl('', [Validators.required]),
    hotelImage5: new FormControl('', [Validators.required]),
    hotelStatus: new FormControl('', [Validators.required]),


  })

  createData() {
    let hotelId = this.form.get('hotelId')?.value;
    let hotelName = this.form.get('hotelName')?.value;
    let hotelCategory = this.form.get('hotelCategory')?.value;
    let hotelAddress = this.form.get('hotelAddress')?.value;
    let hotelMapLink = this.form.get('hotelMapLink')?.value;
    let hotelEmail = this.form.get('hotelEmail')?.value;
    let contact1 = this.form.get('contact1')?.value;
    let contact2 = this.form.get('contact2')?.value;
    let hotelPetAllowed = this.form.get('hotelPetAllowed')?.value;
    let option1 = this.form.get('option1')?.value;
    let option2 = this.form.get('option2')?.value;
    let option3 = this.form.get('option3')?.value;
    let option4 = this.form.get('option4')?.value
    let price1 = this.form.get('price1')?.value
    let price2 = this.form.get('price2')?.value
    let price3 = this.form.get('price3')?.value
    let price4 = this.form.get('price4')?.value
    let hotelImage1 = this.form.get('hotelImage1')?.value
    let hotelImage2 = this.form.get('hotelImage2')?.value
    let hotelImage3 = this.form.get('hotelImage3')?.value
    let hotelImage4 = this.form.get('hotelImage4')?.value
    let hotelImage5 = this.form.get('hotelImage4')?.value
    let hotelStatus = this.form.get('hotelStatus')?.value


    let setData = new FormData();
    setData.append('hotelId', hotelId!)
    setData.append('hotelName', hotelName!)
    setData.append('hotelCategory', hotelCategory!)
    setData.append('hotelPetAllowed', hotelPetAllowed!)
    setData.append('hotelMapLink', hotelMapLink!)
    setData.append('hotelAddress', hotelAddress!)
    setData.append('contact1', contact1!)
    setData.append('contact2', contact2!)
    setData.append('contact2', contact2!)
    setData.append('hotelEmail', hotelEmail!)
    setData.append('option1', option1!)
    setData.append('option2', option2!)
    setData.append('option3', option3!)
    setData.append('option4', option4!)
    setData.append('price1', price1!)
    setData.append('price2', price2!)
    setData.append('price3', price3!)
    setData.append('price4', price4!)
    setData.append('images', hotelImage1!)
    setData.append('images', hotelImage2!)
    setData.append('images', hotelImage3!)
    setData.append('images', hotelImage4!)
    setData.append('images', hotelImage5!)
    setData.append('hotelStatus', hotelStatus!)



    this.service.save(setData).subscribe(res=>{
      alert('save')
    })
  }



}

