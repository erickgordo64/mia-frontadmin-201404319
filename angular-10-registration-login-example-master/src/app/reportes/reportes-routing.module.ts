import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SelectReporteComponent} from './selectreporte.component';
import { ListReporte1Component} from './reporte1/list.component';
import { ListReporte2Component} from './reporte2/list.component';
import { ListReporte3Component} from './reporte3/list.component';
import { ListReporte4Component} from './reporte4/list.component';
import { ListReporte5Component} from './reporte5/list.component';
import { ListReporte6Component} from './reporte6/list.component';
import { ListReporte7Component} from './reporte7/list.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {path: '', component:  SelectReporteComponent},
            {path: 'reporte1', component:  ListReporte1Component},
            {path: 'reporte2', component:  ListReporte2Component},
            {path: 'reporte3', component:  ListReporte3Component},
            {path: 'reporte4', component:  ListReporte4Component},
            {path: 'reporte5', component:  ListReporte5Component},
            {path: 'reporte6', component:  ListReporte6Component},
            {path: 'reporte7', component:  ListReporte7Component},
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportesRoutingModule { }