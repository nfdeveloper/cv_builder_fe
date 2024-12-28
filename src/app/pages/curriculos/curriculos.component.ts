import { Component, OnInit } from '@angular/core';
import { Curriculo } from '../../core/models/curriculo/curriculo.model';
import { CurriculoService } from '../../core/services/curriculo.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-curriculos',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './curriculos.component.html',
  styleUrl: './curriculos.component.scss'
})
export class CurriculosComponent implements OnInit{

  curriculos: Curriculo[] = [];

  constructor(
    private service: CurriculoService
  ){ }

  ngOnInit(): void {
    this.recuperaCurriculos();
  }
  
  recuperaCurriculos(){
    this.service.listar().subscribe(
      res => {
        this.curriculos = res;
      }
    )
  }
}
