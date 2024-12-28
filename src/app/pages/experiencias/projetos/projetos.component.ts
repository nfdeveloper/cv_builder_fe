import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../../core/models/projeto/projeto.model';
import { ProjetoService } from '../../../core/services/projeto.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit{

  projetos: Projeto[] = [];

  constructor(
    private service: ProjetoService
  ){ }

  ngOnInit(): void {
    this.recuperarProjetos();
  }

  recuperarProjetos(){
    this.service.listar().subscribe(
      res => {
        this.projetos = res;
      }
    )
  }

}
