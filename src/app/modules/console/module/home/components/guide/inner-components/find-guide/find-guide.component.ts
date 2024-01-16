import { Component } from '@angular/core';
import {GuideService} from "../../../../../../../../service/guide.service";

@Component({
  selector: 'app-find-guide',
  templateUrl: './find-guide.component.html',
  styleUrls: ['./find-guide.component.scss']
})
export class FindGuideComponent {

  constructor(private  service:GuideService) {
  }

  list2:Array<any>=[]
  findGuide(event:any){
    this.service.findById(event.target.value).subscribe(res=>{
      this.list2=res.data
      console.log(this.list2)
    })
  }
}
