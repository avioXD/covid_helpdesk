import { animation } from '@angular/animations';
import { Component ,OnInit } from '@angular/core';
import {
  animate
  // ...
} from '@angular/animations';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'CovidProject';
  ngOnInit(){
   
    const body = <HTMLElement>document.getElementById('body');
    const load = <HTMLElement>document.getElementById('load');
    setTimeout(() => {
      load.style.display = "none";
      body.style.display="block";
    }, 1000);
    window.scroll({
      behavior: 'smooth'
    })
    

  }

}
