import { Component, OnInit } from '@angular/core';
import { EditHospitalsService } from '../../services/edit-hospitals.service';
import {  ToastrService } from 'ngx-toastr';
import {  ReactiveFormsModule,FormBuilder  } from '@angular/forms';
import * as XLSX from "xlsx"
@Component({
  selector: 'app-edit-hospitals',
  templateUrl: './edit-hospitals.component.html',
  styleUrls: ['./edit-hospitals.component.scss']
})
export class EditHospitalsComponent implements OnInit {
lists:any;
xlsxFile: any;
  constructor(private hospitals: EditHospitalsService,
    private toaster: ToastrService,
    public ngForm:ReactiveFormsModule,) { }

  ngOnInit(): void {
    this.getList()
  }
  updateBeds(value:any){
      this.hospitals.updateBeds(value).subscribe((res)=>{
        this.toaster.success('updated!');
        this.getList();
      },(err)=>{
        this.toaster.error('Failed!');
      })
  }
  getList(){
      this.hospitals.getHospitals().subscribe((data)=>{
        this.lists = data;
      },(err)=>{
        this.toaster.error('Unable to get')
      })
  }

   onSubmit(){
   if(this.xlsxFile){
        this.hospitals.submitXLS(this.xlsxFile).subscribe((data)=>{
        console.log(data);
       },(err)=>{
        console.log(err);
        })
      console.log(this.xlsxFile);
      }
   }
   onFileSelected(event:any){
     let workBook:any ;
     let jsonData:any;
     const file= event.target.files[0];
     const reader = new FileReader();
     reader.onload = (evnt) =>{
       const data =  reader.result;
       workBook = XLSX.read(data,{type:'binary'});
       jsonData = workBook.SheetNames.reduce((initial:any, name:any)=>{
           const sheet = workBook.Sheets[name];
           initial[name]=XLSX.utils.sheet_to_json(sheet);
           return initial;
       },{});
       const dataString = JSON.stringify(jsonData);
       this.xlsxFile = jsonData;
       console.log(this.xlsxFile);
     }
     reader.readAsBinaryString(file);
   }

}
