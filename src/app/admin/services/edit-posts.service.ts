import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditPostsService {

  constructor(private http:HttpClient) {
  
   }
   aprove(value:any){
     return this.http.put(`/admin/PUT/posts/aprove/${value._id}`,value);
   }
   getUnAprovedPosts(){
     return this.http.get('/admin/GET/posts/unaprove')
   }
   getAprovedPosts(){
    return this.http.get('/admin/GET/posts/aprove')
  }
   deletePost(value:any){
     return this.http.delete(`/admin/DEL/posts/${value._id}`,value);
   }
}
