import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
open : boolean = false;
email :any;
menu: string= "../../../assets/raw/menu.svg";
close:string= "../../../assets/raw/menucross.svg";
  constructor(private authService: AdminAuthService,
    private toast: ToastrService,
    private router: Router) { 
      this.authService.getUser().subscribe((user)=>{
        this.email = user?.email;
      },(err)=>{
        this.toast.error("Not logged In");
        this.router.navigateByUrl('/signin');
       })
    }

  ngOnInit(): void {
    
  }
   async handleSignOut(){
    try{
      const res = await this.authService.signOut();
      this.router.navigateByUrl('');
      this.toast.info("Logged Out");
      this.email = null;
    }catch(err){
      this.toast.error('Something is Worng');
    }
  }

}
