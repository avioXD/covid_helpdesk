import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditHospitalsService {

  constructor(private http:HttpClient) { }

  getHospitals(){
    return this.http.get('/admin/GET/hospitals');
  }
  updateBeds(value:any){
    return this.http.put(`/admin/PUT/hospitals/bedupdate/${value._id}`,value);
  }
  submitXLS(data:any){
    return this.http.post('/admin/POST/hospitals/xls',data);
  }
}
