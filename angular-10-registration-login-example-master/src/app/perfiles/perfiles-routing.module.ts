import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './perfilpapa/list.component';
import { AddEditComponent } from './perfilpapa/add-edit.component';
import { SelectPerfilComponent } from './selectperfil.component';
import { ListSantaComponent } from './perfilsanta/listsanta.component';
import { AddEditSantaComponent } from './perfilsanta/add-editsanta.component';
import { ListHijoComponent } from './pefilhijo/listhijo.component';
import { AddEditHijoComponent } from './pefilhijo/add-edithijo.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {path: '', component:  SelectPerfilComponent},
            { path: 'listaPapa', component: ListComponent },
            { path: 'listaPapa/add', component: AddEditComponent },
            { path: 'listaPapa/edit/:id', component: AddEditComponent },
            { path: 'listaSanta', component: ListSantaComponent },
            { path: 'listaSanta/add', component: AddEditSantaComponent },
            { path: 'listaSanta/edit/:id', component: AddEditSantaComponent },
            { path: 'listaHijo', component: ListHijoComponent },
            { path: 'listaHijo/add', component: AddEditHijoComponent },
            { path: 'listaHijo/edit/:id', component: AddEditHijoComponent }
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilesRoutingModule { }