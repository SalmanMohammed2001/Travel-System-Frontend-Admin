import {Component, OnInit} from '@angular/core';
import {GuideService} from "../../../../../../../../service/guide.service";

@Component({
  selector: 'app-delete-guide',
  templateUrl: './delete-guide.component.html',
  styleUrls: ['./delete-guide.component.scss']
})
export class DeleteGuideComponent implements  OnInit{

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


  delete(id:string){
    if(confirm("are you sure want to delete")){
      this.service.delete(id).subscribe(res=>{
        alert('delete')
        this.findAll()
      })
    }
  }

}
