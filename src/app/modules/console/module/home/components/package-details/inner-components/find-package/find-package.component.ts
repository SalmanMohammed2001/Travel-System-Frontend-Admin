import {Component, OnInit} from '@angular/core';
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";

@Component({
  selector: 'app-find-package',
  templateUrl: './find-package.component.html',
  styleUrls: ['./find-package.component.scss']
})
export class FindPackageComponent implements OnInit{

  constructor(private packageService:PackageDetailsService) {
  }

  ngOnInit(): void {

  }


  list2:Array<any>=[]
  findHotel(id:any){
    this.packageService.findId(id).subscribe(res=>{
      this.list2=res.data
      console.log(this.list2)
    })
  }

}
