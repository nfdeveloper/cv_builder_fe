import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioLogado } from '../models/usuario/usuario-logado.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly usuarioEndPoint: String = `${environment.apiBaseUrl}/usuarios`;
        
    constructor(private http: HttpClient) { }

    usuarioLogado(): Observable<UsuarioLogado> {
      return this.http.get<UsuarioLogado>(`${this.usuarioEndPoint}/usuario-logado`);
    }
}
