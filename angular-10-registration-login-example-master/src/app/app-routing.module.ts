import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const productosModule = () => import('./productos/productos.module').then(x => x.ProductosModule);
const perfilesModule =() => import ('./perfiles/perfiles.module').then(x=>x.PerfilesModule);
const mensajesModule =() => import ('./mensajes/mensajes.module').then(x=>x.MensajesModule);
const reportesModule=() => import('./reportes/reportes.module').then(x=>x.PerfilesModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'productos', loadChildren: productosModule, canActivate: [AuthGuard] },
    { path: 'perfiles', loadChildren: perfilesModule, canActivate: [AuthGuard] },
    { path: 'mensajes', loadChildren: mensajesModule, canActivate: [AuthGuard] },
    { path: 'reportes', loadChildren: reportesModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }