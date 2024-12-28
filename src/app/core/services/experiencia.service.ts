import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia/experiencia.model';
import { ExperienciaCreate } from '../models/experiencia/experiencia-create.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private readonly experienciaEndPoint: String = `${environment.apiBaseUrl}/experiencias`;
  
  constructor(private http: HttpClient) { }

  listar(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.experienciaEndPoint}`);
  }

  criar(data: ExperienciaCreate): Observable<Experiencia> {
    return this.http.post(`${this.experienciaEndPoint}`, data);
  }

  listarAtivos(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.experienciaEndPoint}/ativos`);
  }
}
