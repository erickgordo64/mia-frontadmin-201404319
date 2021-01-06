import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './perfilpapa/list.component';
import { AddEditComponent } from './perfilpapa/add-edit.component';
import { SelectPerfilComponent} from './selectperfil.component';
import { ListSantaComponent } from './perfilsanta/listsanta.component';
import { AddEditSantaComponent } from './perfilsanta/add-editsanta.component';
import { ListHijoComponent } from './pefilhijo/listhijo.component';
import { AddEditHijoComponent } from './pefilhijo/add-edithijo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PerfilesRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        SelectPerfilComponent,
        ListSantaComponent,
        AddEditSantaComponent,
        ListHijoComponent,
        AddEditHijoComponent
    ]
})
export class PerfilesModule { }