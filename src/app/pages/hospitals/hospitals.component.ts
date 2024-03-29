import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';;
import * as XLSX from 'xlsx';
import {ToastrService} from "ngx-toastr";
import { GETDATAService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
sendFile :any;
lists: any;

  constructor(public ngForm: ReactiveFormsModule,
    private getDataService: GETDATAService,
    private toster: ToastrService) { 
      this.getList();
    }

  ngOnInit(): void {
    
  }
  getList(){
    this.getDataService.getHospitalData().subscribe((data)=>{
      this.lists = data;
    },(err)=>{
      this.toster.error(err);
    })
  }
  // onSubmit(value: any){
   
  //      this.hospitalService.submitData(this.sendFile).subscribe((data)=>{
  //      console.log(data);
  //     },(err)=>{
  //      console.log(err);
  //      })
  //   console.log(this.sendFile);
  // }
  // onFileSelected(event:any){
  //   let workBook:any ;
  //   let jsonData:any;
  //   const file= event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (evnt) =>{
  //     const data =  reader.result;
  //     workBook = XLSX.read(data,{type:'binary'});
  //     jsonData = workBook.SheetNames.reduce((initial:any, name:any)=>{
  //         const sheet = workBook.Sheets[name];
  //         initial[name]=XLSX.utils.sheet_to_json(sheet);
  //         return initial;
  //     },{});
  //     const dataString = JSON.stringify(jsonData);
  //     this.sendFile = jsonData
  //   }
  //   reader.readAsBinaryString(file);
  // }

}
