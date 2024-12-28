import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsuarioLogado } from '../../../core/models/usuario/usuario-logado.model';
import { CurriculoCreate } from '../../../core/models/curriculo/curriculo-create.model';
import { Experiencia } from '../../../core/models/experiencia/experiencia.model';
import { Curso } from '../../../core/models/curso/curso.model';

@Component({
  selector: 'app-modal-pre-visualizar-curriculo',
  standalone: true,
  imports: [],
  templateUrl: './modal-pre-visualizar-curriculo.component.html',
  styleUrl: './modal-pre-visualizar-curriculo.component.scss'
})
export class ModalPreVisualizarCurriculoComponent implements OnInit{

  usuario: UsuarioLogado = new UsuarioLogado();
  curriculo: CurriculoCreate = new CurriculoCreate();
  experiencias: Experiencia[] = [];
  cursos: Curso[] = [];

  constructor(
    private ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ){ }

  ngOnInit(): void {
    if(this.config.data.curriculo) {
      this.curriculo = this.config.data.curriculo;
    }

    if(this.config.data.cursos){
      this.cursos = this.config.data.cursos;
    }

    if(this.config.data.experiencias){
      this.experiencias = this.config.data.experiencias;
    }

    if(this.config.data.usuario){
      this.usuario = this.config.data.usuario;
    }
  }
}
