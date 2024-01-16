import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent  implements OnInit{


  ngOnInit(): void {
  }


  form=new FormGroup({
    hotelName:new FormControl('',[Validators.required]),
    hotelCategory:new FormControl('',[Validators.required]),
    hotelAddress:new FormControl('',[Validators.required]),
    hotelMapLink:new FormControl('',[Validators.required]),
    hotelEmail:new FormControl('',[Validators.required]),
    contact1:new FormControl('',[Validators.required]),
    contact2:new FormControl('',[Validators.required]),
    hotelPetAllowed:new FormControl('',[Validators.required]),
    option1:new FormControl('',[Validators.required]),
    price1:new FormControl('',[Validators.required]),
    option2:new FormControl('',[Validators.required]),
    price2:new FormControl('',[Validators.required]),
    option3:new FormControl('',[Validators.required]),
    price3:new FormControl('',[Validators.required]),
    option4:new FormControl('',[Validators.required]),
    price4:new FormControl('',[Validators.required]),


  })

  createData(){
    console.log(this.form)
  }


}
