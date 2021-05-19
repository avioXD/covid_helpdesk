import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
open : boolean = false;
menu: string= "../../../assets/raw/menu.svg";
close:string= "../../../assets/raw/menucross.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
