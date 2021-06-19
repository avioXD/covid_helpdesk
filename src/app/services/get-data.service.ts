import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GETDATAService {

  constructor(private http: HttpClient) { }

  getCovidUpdate(){
    return this.http.get('/GET/covidupdates');
  }
  getCovidChart(){
    return this.http.get('/GET/covidcases');
  }
  getOxygenLeads(){
    return this.http.get('/GET/oxygenleads');
  }
  getHospitalData(){
    return this.http.get('/GET/hospitals');
  }
}
