import { Component, OnInit } from '@angular/core';
import {  ReactiveFormsModule,} from '@angular/forms';
import { NgModel } from '@angular/forms';
import {Observable} from 'rxjs';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import {NgxImageCompressService} from 'ngx-image-compress';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  form :boolean = false;
  img: any;
  imgName:any;
  imgString:any = "../../../assets/raw/img.ico" ;
  posts: any;
  constructor(public ngForm:ReactiveFormsModule,
    private newsFeedService : NewsfeedService,
    private imageCompress: NgxImageCompressService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    
    this.getPosts();
  }
  onPost(values:any){
    if(this.imgString){
      values.img= this.imgString;
    }
    console.log(values);
    this.newsFeedService.createPost(values).subscribe((result)=>{
      this.toaster.success("Post Will Show After Admin Aprove!");
      this.getPosts();
    },(err)=>{
      this.toaster.error("High Resolution Image");
    })
  }
  getPosts(){
    this.newsFeedService.getAllPost().subscribe((data)=>{
      this.posts = data; 
    },(err)=>{
        this.toaster.error("Unable to load Feed!");
    })
  }
  compress(){
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      let ratio = 50;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image)); 
      if(this.imageCompress.byteCount(image)>5528079){
        ratio=25;
      }
      this.imageCompress.compressFile(image, orientation, ratio, ratio).then(
        result => {
         this.imgString = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );
    });
  }
}
