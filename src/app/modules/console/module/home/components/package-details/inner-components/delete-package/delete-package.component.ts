import {Component, OnInit} from '@angular/core';
import {PackageDetailsService} from "../../../../../../../../service/package-details.service";

@Component({
  selector: 'app-delete-package',
  templateUrl: './delete-package.component.html',
  styleUrls: ['./delete-package.component.scss']
})
export class DeletePackageComponent implements OnInit{

  constructor(private packageService:PackageDetailsService) {
  }

  ngOnInit(): void {
    this.findAll()
  }

  list:Array<any>=[]
  findAll(){
    this.packageService.findAll().subscribe(res=>{
      this.list=res.data
      console.log(this.list)
    })
  }

  list2:Array<any>=[]
  findHotel(id:any){
    this.packageService.findId(id).subscribe(res=>{
      this.list2=res.data
      console.log(this.list2)
    })
  }


  delete(id:any){

    if(confirm('are yo delete')){
      this.packageService.delete(id).subscribe(res=>{
        alert('delete')
        this.findAll()
      })
    }

  }

}
