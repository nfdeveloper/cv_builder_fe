import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Projeto } from '../models/projeto/projeto.model';
import { Observable } from 'rxjs';
import { ProjetoCreate } from '../models/projeto/projeto-create.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly ProjetoEndPoint: String = `${environment.apiBaseUrl}/projetos`;
    
  constructor(private http: HttpClient) { }

  listar(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(`${this.ProjetoEndPoint}`);
  }

  criar(data: ProjetoCreate): Observable<Projeto> {
    return this.http.post(`${this.ProjetoEndPoint}`, data);
  }

  listarAtivos(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(`${this.ProjetoEndPoint}/ativos`);
  }
}
