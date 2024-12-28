import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso/curso.model';
import { Observable } from 'rxjs';
import { CursoCreate } from '../models/curso/curso-create.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly cursoEndPoint: String = `${environment.apiBaseUrl}/cursos`;
    
  constructor(private http: HttpClient) { }

  listar(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.cursoEndPoint}`);
  }

  criar(data: CursoCreate): Observable<Curso> {
    return this.http.post(`${this.cursoEndPoint}`, data);
  }

  listarAtivos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.cursoEndPoint}/ativos`);
  }
}
