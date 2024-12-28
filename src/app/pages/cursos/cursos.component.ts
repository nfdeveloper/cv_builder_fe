import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/models/curso/curso.model';
import { TableModule } from 'primeng/table';
import { CursoService } from '../../core/services/curso.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit{
  cursos: Curso[] = [];
  
  constructor(
    private service: CursoService
  ){ }

  ngOnInit(): void {
    this.recuperaCursos();
  }
  
  recuperaCursos(){
    this.service.listar().subscribe(
      res => {
        this.cursos = res;
      }
    )
  }
}
