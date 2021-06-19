import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditCovidCasesService } from '../../services/edit-covid-cases.service';

@Component({
  selector: 'app-edit-covid-cases',
  templateUrl: './edit-covid-cases.component.html',
  styleUrls: ['./edit-covid-cases.component.scss']
})
export class EditCovidCasesComponent implements OnInit {
  cases:number = 10;
  items:any;
  constructor(private covidService: EditCovidCasesService,
    private toaste: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit(value:any){
      this.covidService.updateCases(value).subscribe((result)=>{
        this.toaste.success('Updated');
        this.getAll();
      },(err)=>{
        this.toaste.error('server error');
      })
  }
  remove(item:any){
      this.covidService.removeCases(item).subscribe((result)=>{
        this.toaste.success('Removed');
        this.getAll();
      },(err)=>{
        this.toaste.error('server error');
      })
  }
  getAll(){
    this.covidService.getCases().subscribe((result)=>{
      this.items = result;
    },(err)=>{
        this.toaste.error('server error!')
    })
  } 
}
