import { Component, OnInit } from '@angular/core';
import {  ChartSimpleModule, } from 'ng-uikit-pro-standard'
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

import { DatePipe } from '@angular/common';

import { GETDATAService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-cases-chart',
  templateUrl: './cases-chart.component.html',
  styleUrls: ['./cases-chart.component.scss']
})
export class CasesChartComponent implements OnInit {
  data: any;
  chart: any;


  public chartType: string = 'line';
  public chartDatasets: Array<any> = [];
  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 92, 84,0.6)',
      borderColor: 'rgba(0, 255, 234, 0.829)',
      borderWidth: 3,
    },
    {
      backgroundColor: 'rgba(92, 0, 31,0.6)',
      borderColor: 'rgba(255, 0, 76, 0.822)',
      borderWidth: 3,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  
  constructor(private getData: GETDATAService,
    private datePipe: DatePipe) {
    
   }
  ngOnInit(): void {

    this.getData.getCovidUpdate().subscribe((cases) => {
      // console.log(cases);
      this.data = cases;
      
    }, (err) => {
      console.log(err);
    })
    this.getData.getCovidChart().subscribe((cases)=>{
      this.chart = cases;
      this.createDataset();
    }, (err) => {
      console.log(err);
    })
  }
//     getChart()
//     {
//     let val: any[] = [];
//         for (var item of this.data) {
//             val.push(item.total);
//         }
//     }
    createDataset(){
      var active :any[] = [];
      var newcase: any[] = [];
      var chartLabels: any[] = [];
      for(var item of this.chart){
        active.push(item.active);
        newcase.push(item.recovered);
        chartLabels.push(this.datePipe.transform(item.update));
      }

      this.chartDatasets = [
        {data: newcase, label: "Recoverd"},
        {data: active, label: "Active"},
      ]
      this.chartLabels=chartLabels;

    }



}
