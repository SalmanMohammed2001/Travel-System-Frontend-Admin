import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  hide(){
  const box=  document.getElementById('box')
    const show_button=  document.getElementById('show_button')
    if(box != null && show_button !=null){
      box.style.right='-300px'
      box.style.transition=' all 400ms ease-in'
      show_button.style.display='block'
    }
  }

  show(){
    const box=  document.getElementById('box')
    const show_button=  document.getElementById('show_button')

    if(box != null && show_button !=null){
      show_button.style.display='none'
      box.style.right='0'
      box.style.transition=' all 400ms ease-in'
    }
  }


}
