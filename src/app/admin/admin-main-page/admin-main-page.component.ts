import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  card:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  toogleCard(value:any){
    if(this.card== value){
      this.card=0;
    }else{
      this.card=value;
    }
  }
  

}
