import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EditCovidCasesService {

  constructor(private http:HttpClient) { }

  getCases(){
    return this.http.get('/admin/GET/updatecases');
  }
  updateCases(values:any){
    return this.http.post('/admin/POST/updatecases',values);
  }
  removeCases(cases:any){
    return this.http.delete(`/admin/DEL/deletecases/${cases._id}`);
  }
  
}
