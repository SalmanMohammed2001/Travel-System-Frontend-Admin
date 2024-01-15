import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../../../../../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit{

  constructor(private service:CustomerService) {
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



  findData(event:any){
    /* this.service.findEmail(event.target.value).subscribe(res=>{
       this.list=res
       console.log(this.list)
     })*/

    let tbl_body_element=document.getElementById('tblBody');

    // @ts-ignore
    tbl_body_element.innerHTML="";

    let record_element=document.createElement('tr')
    // @ts-ignore
    /*let text=document.getElementById('searchText')as HTMLInputElement
    let valueData=text.value
    valueData=''*/
    let valueData=event.target.value


    for (const data of this.list) {
      if(data.email.includes(valueData) || data.nic.includes(valueData)){

        let record_data=`<td>${data.userId}</td>
                              <td>${data.username}</td>
                              <td>${data.nic}</td>
                              <td>${data.gender}</td>
                              <td>${data.contact.contact1}</td>
                              <td>${data.email}</td>
                              <td>${data.address}</td>
                              <td>
<!--                              <button class="btn btn-danger btn-sm"  (click)="${delete(data.email)}"> Delete</button>-->
</td>`

        record_element.innerHTML=record_data
        // @ts-ignore
        tbl_body_element.appendChild(record_element)

      }

    }

  }


  delete(email:any){
    console.log(email)
    if(confirm('are you sure'+email)){
      this.service.delete(email).subscribe(res=>{
        alert('delete')
        this.findAll()
      })
    }

  }

}
