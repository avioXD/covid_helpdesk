import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) {

   }
   postOxygenLeads(values:any){
     return this.http.post('/POST/oxygenleads',values);
   }
}
