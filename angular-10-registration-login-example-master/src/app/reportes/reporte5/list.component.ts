﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListReporte5Component implements OnInit {
    users = null;

    barChartOptions: ChartOptions = {
        responsive: true,
      };
      barChartLabels: Label[] = [];
      barChartType: ChartType = 'bar';
      barChartLegend = true;
      barChartPlugins = [];
    
      barChartData: ChartDataSets[] = [
        { data: [], label: 'bitacora' }
      ];


    doughnutChartLabels: Label[] = [];
    doughnutChartData: MultiDataSet = [
      []
    ];
    doughnutChartType: ChartType = 'doughnut';
    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.accountService.getReporte5()
            .pipe(first())
            .subscribe(users => {
                this.users = users
            });
    }

   imprimir(){
       for(let user of this.users){
            this.doughnutChartLabels.push(user.nickname)
            this.doughnutChartData[0].push(user.top)
            this.barChartLabels.push(user.nickname)
            this.barChartData[0].data.push(user.top)
       }
   }

}