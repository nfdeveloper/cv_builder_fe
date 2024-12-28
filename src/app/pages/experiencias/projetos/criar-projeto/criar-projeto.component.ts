import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ProjetoCreate } from '../../../../core/models/projeto/projeto-create.model';
import { Experiencia } from '../../../../core/models/experiencia/experiencia.model';
import { CursoService } from '../../../../core/services/curso.service';
import { MessageService } from 'primeng/api';
import { ExperienciaService } from '../../../../core/services/experiencia.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalPreVisualizarCurriculoComponent } from '../../../curriculos/modal-pre-visualizar-curriculo/modal-pre-visualizar-curriculo.component';

@Component({
  selector: 'app-criar-projeto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    ToastModule
  ],
  templateUrl: './criar-projeto.component.html',
  styleUrl: './criar-projeto.component.scss'
})
export class CriarProjetoComponent implements OnInit{

  projetoForms: any = FormGroup;
  projeto: ProjetoCreate = new ProjetoCreate();
  experiencias: Experiencia[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: CursoService,
    private messageService: MessageService,
    private experienciaService: ExperienciaService
  ){ }

  ngOnInit(): void {
    this.recuperarExperiencias();

    this.projetoForms = this.formBuilder.group({
      titulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      tecnologias: [null],
      duracao: [null],
      experienciaId: [null, [Validators.required]]

    });
  }

  recuperarExperiencias(){
    this.experienciaService.listarAtivos().subscribe(
      res => {

        this.experiencias = res;
      }
    )
  }

  salvar(){
    this.projeto = this.projetoForms.value;

    this.projeto.experienciaId = this.projetoForms.value.experienciaId.id;
  
    console.log(this.projeto);
  }

  
}
