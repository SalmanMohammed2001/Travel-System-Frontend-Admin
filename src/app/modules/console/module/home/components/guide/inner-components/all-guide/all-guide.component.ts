import {Component, OnInit} from '@angular/core';
import {DriverService} from "../../../../../../../../service/driver.service";
import {GuideService} from "../../../../../../../../service/guide.service";

@Component({
  selector: 'app-all-guide',
  templateUrl: './all-guide.component.html',
  styleUrls: ['./all-guide.component.scss']
})
export class AllGuideComponent implements  OnInit{


  constructor(private service:GuideService) {
  }
  ngOnInit(): void {
    this.findAll()
  }

  list:Array<any>=[]

  findAll(){
    this.service.findAll().subscribe(res=>{
      this.list=res.data
      console.log(this.list)
    })
  }

 list2:Array<any>=[]
  findGuide(id:string){
    this.service.findById(id).subscribe(res=>{
     //  console.log(res.data)
        this.list2=res.data
     // console.log(this.list2)
    })
  }

}
