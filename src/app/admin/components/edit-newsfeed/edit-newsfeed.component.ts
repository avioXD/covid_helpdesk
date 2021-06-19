import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditPostsService } from '../../services/edit-posts.service';

@Component({
  selector: 'app-edit-newsfeed',
  templateUrl: './edit-newsfeed.component.html',
  styleUrls: ['./edit-newsfeed.component.scss']
})
export class EditNewsfeedComponent implements OnInit {
  posts:any;
 aprove:boolean =false;
 unaprove:boolean = false;
 formOpen :boolean = false;
  constructor( private editPostService: EditPostsService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  deletePost(post:any){
    this.editPostService.deletePost(post).subscribe((res)=>{
      this.toaster.success("Deleted");
      !this.aprove?this.showAprovePost():this.showUnAprovedPosts();
    },(err)=>{
      this.toaster.error("Server Error");
    })
  }
  aprovePost(post:any){
    this.editPostService.aprove(post).subscribe((res)=>{
      this.toaster.success("Aproved");
    },(err)=>{
      this.toaster.error("Aproval Denied by server");
    })
  }
  showAprovePost(){
    this.editPostService.getAprovedPosts().subscribe((res)=>{
      this.posts = res;
      this.toaster.success("Aproved Posts");
      
    },(err)=>{
      this.toaster.error("Server Error");
    })

  }
  showUnAprovedPosts(){
    this.editPostService.getUnAprovedPosts().subscribe((res)=>{
      this.posts = res;
      this.toaster.success("Unaproved Posts");
    },(err)=>{
      this.toaster.error("Server Error");
    })
  }

}
