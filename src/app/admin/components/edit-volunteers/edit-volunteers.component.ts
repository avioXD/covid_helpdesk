import { Component, OnInit } from '@angular/core';
import {VolunteerModel } from "../../../models/volunteer";
import {  ReactiveFormsModule,FormBuilder  } from '@angular/forms';
import { EditVoulenteerService } from '../../services/edit-voulenteer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-volunteers',
  templateUrl: './edit-volunteers.component.html',
  styleUrls: ['./edit-volunteers.component.scss']
})
export class EditVolunteersComponent implements OnInit {
  newMember : VolunteerModel | undefined;
  members:any ;
  form:boolean[]=[];
  male :string = "../../../../assets/icon/man.png";
  female:string ="../../../../assets/icon/woman.png";
  active:string = "../../../../assets/status/active.png";
  nonactive:string = "../../../../assets/status/noActive.png";
  verified:string ="../../../../assets/status/verified.png"
  nonverified:string ="../../../../assets/status/notVerified.png"
  constructor(
    public ngForm:ReactiveFormsModule,
    private editVolService :EditVoulenteerService,
    private toster: ToastrService
    ) { }

  ngOnInit(): void {
  }
  openUploader(event:any){

  }
  getList(){
    this.editVolService.getAllUser().subscribe((data)=>{
      console.log("getData: ",data);
          this.members = data;
    })
  }
  toggleForm(i:any){
    this.form[i]=!this.form[i];
  }
  onSubmit(value: any, i:any){
    console.log(value);
      this.editVolService.updateUser(value).subscribe((data)=>{
        this.toster.success("Updated!");
        this.toggleForm(i)
      },(err)=>{
        this.toster.error(`${err}`);
      })
  }

}
