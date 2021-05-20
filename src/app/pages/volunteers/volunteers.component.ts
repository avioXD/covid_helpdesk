import { Component, OnInit,OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RegisterVolunteerService } from 'src/app/services/register-volunteer.service';
import {VolunteerModel } from "../../models/volunteer";
import {  ReactiveFormsModule,} from '@angular/forms';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  
  newMember : VolunteerModel | undefined;
  members: any ;
  form:boolean= false;
  male :string = "../../../assets/icon/man.png";
  female:string ="../../../assets/icon/woman.png";
  active:string = "../../../assets/status/active.png";
  nonactive:string = "../../../assets/status/noActive.png";
  verified:string ="../../../assets/status/verified.png"
  nonverified:string ="../../../assets/status/notVId.png"

  constructor(private regService : RegisterVolunteerService,
    public ngForm:ReactiveFormsModule,
    private toste : ToastrService
    ) {
  }

  ngOnInit(): void {
    this.getList();
  }
  onSubmit(value:any){
    const {name, email,contact,gender, age, state, wap, fb, insta} = value;
    console.log(value);
    this.newMember = {
      name: name,
      email: email,
      contact: contact,
      gender: gender,
      age: age,
      state:state,
      wap: wap,
      fb:fb,
      insta: insta,
      }

       this.regService.postVolunteer(this.newMember).subscribe((data)=>{
         console.log(data);
         this.toste.success("Registration Sucessfull");
         this.getList();
         this.toggleForm();
       },(err)=>{
        this.toste.error(err.error);
        this.toggleForm();
         console.log(err);
       });
  }
    ngOnchanges(){
     this.getList();
    }
    toggleForm(){
      this.form =!this.form;
    }
    getList(){
      this.regService.getList().subscribe((data)=>{
        console.log(data);
            this.members = data;
      })
    }
  
/*########### Template Driven Form ###########*/
  

}
