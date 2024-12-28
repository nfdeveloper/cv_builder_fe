import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/usuario/login.model';
import { LoginResponse } from '../models/usuario/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authEndPoint: String = `${environment.apiBaseUrl}/auth`;
  private loggedIn = new BehaviorSubject<boolean>(this.getUsername()!=null);
  
  constructor(private http: HttpClient) { }

  login(login: Login): Observable<LoginResponse> {
    return this.http.post(`${this.authEndPoint}`, login);
  }

  verificaToken(): Observable<boolean> {
    return this.http.get<boolean>(`${this.authEndPoint}/verifica-token`);
  }

  setDados(usuarioLogado: LoginResponse){
    this.loggedIn.next(true);
    localStorage.setItem("token", usuarioLogado.token!)
    localStorage.setItem("role", usuarioLogado.role!)
    localStorage.setItem("user", usuarioLogado.usuario!)
  }

  get isLoggedIn(){
    if(!this.getToken() || this.getToken() == "" ) {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  getToken(){
    return localStorage?.getItem("token");
  }

  getRole(){
    return localStorage?.getItem("role");
  }

  getUsername(){
    return localStorage?.getItem("user");
  }

  loggout(){
    this.loggedIn.next(false);
    localStorage.setItem("token", "")
    localStorage.setItem("role", "")
    localStorage.setItem("user", "")
  }

  retirarNavbar(){
    this.loggedIn.next(false);
  }
}
