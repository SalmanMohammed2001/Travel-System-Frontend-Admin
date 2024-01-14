import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-save-vehicle',
  templateUrl: './save-vehicle.component.html',
  styleUrls: ['./save-vehicle.component.scss']
})
export class SaveVehicleComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private http:HttpClient) {
  }


  FrontView(event:any){
   let  file=event.target.files[0]
    this.form.patchValue({frontView:file})
  }
  RearView(event:any){
    const file=event.target.files[0]
    this.form.patchValue({rearView:file})
  }
  FontInterior(event:any){
    const file=event.target.files[0]
    this.form.patchValue({fontInterior:file})
  }
 /* RearInterior(event:any){
    const file=event.target.files[0]
    this.form.patchValue({rearInterior:file})
  }*/

  form=new FormGroup({
    vehicleName:new FormControl('',[Validators.required]),
    vehicleCategory:new FormControl('',[Validators.required]),
    vehicleFuelType:new FormControl('',[Validators.required]),
    vehicleHybrid:new FormControl('',[Validators.required]),
    vehicleType:new FormControl('',[Validators.required]),
    vehicleTransmission:new FormControl('',[Validators.required]),
    vehicleSeatCapacity:new FormControl('',[Validators.required]),
    vehicleFuelUsage:new FormControl('',[Validators.required]),
    vehiclePriceFor1Km:new FormControl('',[Validators.required]),
    vehiclePriceFor100Km:new FormControl('',[Validators.required]),
    vehicleQty:new FormControl('',[Validators.required]),
    frontView:new FormControl('',[Validators.required]),
    rearView:new FormControl('',[Validators.required]),
    fontInterior:new FormControl('',[Validators.required]),
    // rearInterior:new FormControl('',[Validators.required]),

  })


  createData(){
    console.log(this.form)
    let vehicleName=this.form.get('vehicleName')?.value;
    let  vehicleCategory=this.form.get('vehicleCategory')?.value;
    let vehicleFuelType=this.form.get('vehicleFuelType')?.value;
    let vehicleHybrid=this.form.get('vehicleHybrid')?.value;
    let  vehicleType=this.form.get('vehicleType')?.value;
    let vehicleTransmission=this.form.get('vehicleTransmission')?.value;
    let vehicleSeatCapacity=this.form.get('vehicleSeatCapacity')?.value;
    let vehicleFuelUsage=this.form.get('vehicleFuelUsage')?.value;
    let vehiclePriceFor1Km=this.form.get('vehiclePriceFor1Km')?.value;
    let vehiclePriceFor100Km=this.form.get('vehiclePriceFor100Km')?.value;
    let vehicleQty=this.form.get('vehicleQty')?.value;
    let frontView=this.form.get('frontView')?.value
    let rearView=this.form.get('rearView')?.value
    let fontInterior=this.form.get('fontInterior')?.value
    // let rearInterior=this.form.get('rearInterior')?.value




    let setData = new FormData()
    setData.append('vehicleName',vehicleName!)
    setData.append('vehiclePriceFor1Km',vehiclePriceFor1Km!)
    setData.append('vehicleCategory',vehicleCategory!)
    setData.append('vehicleType',vehicleType!)
    setData.append('vehiclePriceFor100Km',vehiclePriceFor100Km!)
    setData.append('vehicleFuelType',vehicleFuelType!)
    setData.append('vehicleSeatCapacity',vehicleSeatCapacity!)
    setData.append('vehicleFuelUsage',vehicleFuelUsage!)
    setData.append('vehicleHybrid',vehicleHybrid!)
    setData.append('vehicleTransmission',vehicleTransmission!)
    setData.append('vehicleQty',vehicleQty!)
    setData.append('vehicleImages',frontView!)
    setData.append('vehicleImages',rearView!)
    setData.append('vehicleImages',fontInterior!)
    // setData.append('vehicleImages',rearInterior!)


    this.http.post('http://localhost:8081/api/v1/vehicle',setData).subscribe(res=>{
      alert('save vehicle')
    })
    console.log('salmna')

  }




}
