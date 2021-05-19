import { Component, OnInit } from '@angular/core';
import { faAngleRight,faMailBulk } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  leftArrow = faAngleRight;
  mailicon = faMailBulk;
  constructor() { }

  ngOnInit(): void {
  }

}
