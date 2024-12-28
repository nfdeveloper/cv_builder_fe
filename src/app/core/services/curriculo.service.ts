import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo/curriculo.model';
import { CurriculoCreate } from '../models/curriculo/curriculo-create.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private readonly curriculoEndPoint: String = `${environment.apiBaseUrl}/curriculos`;
    
  constructor(private http: HttpClient) { }

  listar(): Observable<Curriculo[]>{
    return this.http.get<Curriculo[]>(`${this.curriculoEndPoint}`);
  }

  criar(data: CurriculoCreate): Observable<Curriculo> {
    return this.http.post(`${this.curriculoEndPoint}`, data);
  }

}
