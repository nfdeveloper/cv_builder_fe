import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CurriculoCreate } from '../../../core/models/curriculo/curriculo-create.model';
import { Curso } from '../../../core/models/curso/curso.model';
import { Experiencia } from '../../../core/models/experiencia/experiencia.model';
import { CurriculoService } from '../../../core/services/curriculo.service';
import { CursoService } from '../../../core/services/curso.service';
import { ExperienciaService } from '../../../core/services/experiencia.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { PickListModule } from 'primeng/picklist';
import { DragDropModule } from 'primeng/dragdrop';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalPreVisualizarCurriculoComponent } from '../modal-pre-visualizar-curriculo/modal-pre-visualizar-curriculo.component';
import { UsuarioLogado } from '../../../core/models/usuario/usuario-logado.model';
import { UsuarioService } from '../../../core/services/usuario.service';

@Component({
  selector: 'app-criar-curriculo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule,
    PickListModule,
    DragDropModule,
    TooltipModule
  ],
  templateUrl: './criar-curriculo.component.html',
  styleUrl: './criar-curriculo.component.scss'
})
export class CriarCurriculoComponent implements OnInit{
  
  curriculoForms: any = FormGroup;
  curriculo: CurriculoCreate = new CurriculoCreate();
  experiencias: Experiencia[] = [];
  cursos: Curso[] = [];
  experienciasSelecionadas: Experiencia[] = [];
  cursosSelecionados: Curso[] = [];
  usuarioLogado: UsuarioLogado = new UsuarioLogado();
  ref: DynamicDialogRef | undefined;
  
  constructor(
    private experienciaService: ExperienciaService,
    private cursoService: CursoService,
    private service: CurriculoService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private messageService: MessageService,
    private usuarioService: UsuarioService
  ){ }

  ngOnInit(): void {
    this.recuperarUsuarioLogado();
    this.recuperaCursos();
    this.recuperaExperiencias();

    this.curriculoForms = this.formBuilder.group({
      nome: [null, [Validators.required]],
      titulo: [null, [Validators.required]],
      subTitulo: [null, [Validators.required]],
      resumo: [null, [Validators.required]],
      competenciasTecnicas: [null, [Validators.required]],
    })
  }

  recuperarUsuarioLogado(){
    this.usuarioService.usuarioLogado().subscribe(
      res => {
        this.usuarioLogado = res;
      }
    )
  }

  recuperaCursos(){
    return this.cursoService.listarAtivos().subscribe(
      res => {
        this.cursos = res;
      }
    );
  }

  recuperaExperiencias(){
    return this.experienciaService.listarAtivos().subscribe(
      res => {
        this.experiencias = res;
      }
    );
  }

  salvar(){
    this.curriculo = this.curriculoForms.value;
    
    if(this.cursosSelecionados){
      this.curriculo.cursos = this.cursosSelecionados!.map(c => c.id!)
    }

    if(this.experienciasSelecionadas){
      this.curriculo.experiencias = this.experienciasSelecionadas!.map(e => e.id!);
    }

    this.service.criar(this.curriculo).subscribe(
      res => {
        this.curriculoForms.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Currículo criado com sucesso!',
        });
      }
    )
  }

  visualizarPrevia(){
    this.curriculo = this.curriculoForms.value;

    this.ref = this.dialogService.open(
      ModalPreVisualizarCurriculoComponent,
      {
        width: '50rem',
        height: '100vh',
        modal: true,
        data: {
          curriculo: this.curriculo,
          cursos: this.cursosSelecionados,
          experiencias: this.experienciasSelecionadas,
          usuario: this.usuarioLogado
        }
      }
    )
  }

}
