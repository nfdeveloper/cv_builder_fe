import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../core/models/experiencia/experiencia.model';
import { TableModule } from 'primeng/table';
import { ExperienciaService } from '../../core/services/experiencia.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent implements OnInit{

  experiencias: Experiencia[] = [];

  constructor(
    private service: ExperienciaService
  ){ }
  
  ngOnInit(): void {
    this.recuperaExperiencias();
  }

  recuperaExperiencias(){
    this.service.listar().subscribe(
      res => {
        this.experiencias = res
      });
  }
}
