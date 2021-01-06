import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ReportesRoutingModule } from './reportes-routing.module';
import { LayoutComponent } from './layout.component';
import { SelectReporteComponent} from './selectreporte.component';
import { ListReporte1Component} from './reporte1/list.component';
import { ListReporte2Component} from './reporte2/list.component';
import { ListReporte3Component} from './reporte3/list.component';
import { ListReporte4Component} from './reporte4/list.component';
import { ListReporte5Component} from './reporte5/list.component';
import { ListReporte6Component} from './reporte6/list.component';
import { ListReporte7Component} from './reporte7/list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReportesRoutingModule,
        ChartsModule
    ],
    declarations: [
        LayoutComponent,
        SelectReporteComponent,
        ListReporte1Component,
        ListReporte2Component,
        ListReporte3Component,
        ListReporte4Component,
        ListReporte5Component,
        ListReporte6Component,
        ListReporte7Component
    ]
})
export class PerfilesModule { }