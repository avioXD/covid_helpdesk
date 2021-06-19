import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GETDATAService } from 'src/app/services/get-data.service';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: 'app-oxygens',
  templateUrl: './oxygens.component.html',
  styleUrls: ['./oxygens.component.scss']
})
export class OxygensComponent implements OnInit {
form :boolean = false;
leads:any;
  constructor(private getDataService: GETDATAService,
    private toaste :ToastrService,
    private postService: PostDataService) { }

  ngOnInit(): void {
    this.getLeads();
  }
  toggleForm(){
    this.form = !this.form
  }
  onSubmit(values: any){
    console.log(values);
    this.postService.postOxygenLeads(values).subscribe((data)=>{
      this.toaste.success('Submited!');
      this.toggleForm();
      this.getLeads();
    },(err)=>{
      this.toaste.error('Submittion Error!');
    })
  }

  getLeads(){
  this.getDataService.getOxygenLeads().subscribe((data)=>{
    this.leads = data;
  },(err)=>{
    this.toaste.error('Unable to get')
  })
  }
}
