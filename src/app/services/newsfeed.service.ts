import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http: HttpClient) { }


  createPost(postData: any){
    return this.http.post('/POST/createpost',postData);
  }
  getAllPost(){
    return this.http.get("/GET/createpost");
  }
}
