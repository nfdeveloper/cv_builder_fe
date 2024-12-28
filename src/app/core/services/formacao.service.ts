import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacao } from '../models/formacao/formacao.model';
import { FormacaoCreate } from '../models/formacao/formacao-create.model';

@Injectable({
  providedIn: 'root'
})
export class FormacaoService {

  private readonly formacaoEndPoint: String = `${environment.apiBaseUrl}/formacoes`;
      
  constructor(private http: HttpClient) { }

  listar(): Observable<Formacao[]>{
    return this.http.get<Formacao[]>(`${this.formacaoEndPoint}`);
  }

  criar(data: FormacaoCreate): Observable<Formacao> {
    return this.http.post(`${this.formacaoEndPoint}`, data);
  }

  listarAtivos(): Observable<Formacao[]>{
    return this.http.get<Formacao[]>(`${this.formacaoEndPoint}/ativos`);
  }
}
