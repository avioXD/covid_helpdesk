import { Injectable } from '@angular/core';
import { VolunteerModel } from "../models/volunteer";
import {HttpClient} from "@angular/common/http";
import { of } from 'rxjs';

 @Injectable({
  providedIn: 'root'
})

export class RegisterVolunteerService {
  
  name: any;
  constructor(private http: HttpClient,) { 
   


  }
  getList(){
    return this.http.get('http://localhost:3000/GET/volenteers');
  }
  postVolunteer(volunteer : VolunteerModel){
    const header ={
      "Content-Type": "application/json"
    }
    const DATA = JSON.stringify(volunteer);
   // console.log(DATA);
    const url="http://localhost:3000/POST/volunteers"
     return this.http.post(url,volunteer)
  }

}
