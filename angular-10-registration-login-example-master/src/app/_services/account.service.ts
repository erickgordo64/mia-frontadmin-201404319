import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Accion, Categoria } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    private accionSubject: BehaviorSubject<Accion>;
    public accion: Observable<Accion>

    private categoriaSubject: BehaviorSubject<Categoria>
    public categoria: Observable<Categoria>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();

        this.accionSubject = new BehaviorSubject<Accion>(JSON.parse(localStorage.getItem('accion')));
        this.accion = this.accionSubject.asObservable();

        this.categoriaSubject = new BehaviorSubject<Categoria>(JSON.parse(localStorage.getItem('categoria')));
        this.categoria = this.categoriaSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public get accionValue(): Accion{
        return this.accionSubject.value;
    }

    public get categoriaValue(): Categoria{
        return this.categoriaSubject.value;
    }

    login(correo, contrasena) {
        return this.http.post<User>(`${environment.apiUrl}/loginAdmin`, { correo, contrasena })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: Accion) {
        return this.http.post(`${environment.apiUrl}/addBuenaAccion`, user);
    }

    getAll() {
        return this.http.get<Accion[]>(`${environment.apiUrl}/getBuenaAccion`);
    }

    getProductos(){
        return this.http.get<Accion[]>(`${environment.apiUrl}/getProductos`);
    }

    getCategorias(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getCategoria`);
    }

    getSanta(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getSanta`);
    }

    getPadre(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getPadre`);
    }

    getHijo(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getHijo`);
    }

    addProductos(user: Accion){
        return this.http.post(`${environment.apiUrl}/addProductos`, user);
    }

    addSanta(user: Accion){
        return this.http.post(`${environment.apiUrl}/addSanta`, user);
    }

    addPadre(user: Accion){
        return this.http.post(`${environment.apiUrl}/addPadre`, user);
    }

    addHijo(user: Accion){
        return this.http.post(`${environment.apiUrl}/addHijo`, user);
    }

    addArchivo(user: any){
        return this.http.post(`${environment.apiUrl}/addArchivo`, user);
    }

    addCarga(user, id){
        return this.http.post(`${environment.apiUrl}/CargaMasiva`, {user, id});
    }

    addConfirmarCarga(user, id){
        return this.http.post(`${environment.apiUrl}/ConfirmarCarga`, {user, id});
    }

    addMensajes(idchat, contenido, idadmin, idhijo){
        return this.http.post(`${environment.apiUrl}/addMensaje`, { idchat, contenido, idadmin,idhijo })
    }

    getById(id: string) {
        return this.http.get<Accion>(`${environment.apiUrl}/getBA/?id=${id}`);
    }

    getProductoById(id: string){
        return this.http.get<Accion>(`${environment.apiUrl}/getProduct/?id=${id}`);
    }

    getSantaById(id: string){
        return this.http.get<Accion>(`${environment.apiUrl}/getSant/?id=${id}`);
    }

    getPapaById(id: string){
        return this.http.get<Accion>(`${environment.apiUrl}/getPapa/?id=${id}`);
    }

    getHijoById(id: string){
        return this.http.get<Accion>(`${environment.apiUrl}/getSon/?id=${id}`);
    }

    getChatById(id: string){
        return this.http.get<Accion[]>(`${environment.apiUrl}/getChat/?id=${id}`);
    }

    getMensajeById(id: string){
        return this.http.get<Accion[]>(`${environment.apiUrl}/getMensaje/?id=${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/updateBA/?id=${id}`, params);
    }

    updateProducto(id, params) {
        return this.http.put(`${environment.apiUrl}/updateProducto/?id=${id}`, params);
    }

    updateSanta(id, params) {
        return this.http.put(`${environment.apiUrl}/updateSanta/?id=${id}`, params);
    }

    updatePadre(id, params) {
        return this.http.put(`${environment.apiUrl}/updatePadre/?id=${id}`, params);
    }

    updateHijo(id, params) {
        return this.http.put(`${environment.apiUrl}/updateHijo/?id=${id}`, params);
    }

   //reportes 

   getReporte1(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte1`);
   }

   getReporte2(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte2`);
   }

   getReporte3(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte3`);
   }

   getReporte4(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte4`);
   }

   getReporte5(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte5`);
   }

   getReporte6(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte6`);
   }

   getReporte7(){
        return this.http.get<Categoria[]>(`${environment.apiUrl}/getReporte7`);
   }
    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.idadmin) {
                    this.logout();
                }
                return x;
            }));
    }
}