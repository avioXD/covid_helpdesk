import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolunteerModel} from "../../models/volunteer";
@Injectable({
  providedIn: 'root'
})
export class EditVoulenteerService {

  constructor(private http: HttpClient) { }

  updateUser(member: any){
     return this.http.put(`http://localhost:3000/admin/PUT/volunteers/${member._id}`,member);
  }
}
