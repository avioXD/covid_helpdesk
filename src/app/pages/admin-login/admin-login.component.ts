import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private auth: AdminAuthService,
    private route: Router,
    private toste: ToastrService,
    private ngForm: ReactiveFormsModule ) { }

  ngOnInit(): void {
    window.scroll({
      top:1000,
    behavior:'smooth'})
  }
  onSubmit(value:any){
    
    console.log(value.email)
     this.auth.signIn(value.email,value.password).then((res)=>{
       console.log(res);
       this.toste.success("Authorized");
       this.route.navigateByUrl('/admin');
     },(err)=>{
       this.toste.info("Not Authorized!")
       this.route.navigateByUrl('/');
     })
  }

}
