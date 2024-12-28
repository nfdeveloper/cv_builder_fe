import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { CursoCreate } from '../../../core/models/curso/curso-create.model';
import { CursoService } from '../../../core/services/curso.service';

interface Situacao {
  id: number;
  descricao: string;
}

@Component({
  selector: 'app-criar-curso',
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
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss'
})
export class CriarCursoComponent implements OnInit{

  cursoForms: any = FormGroup;
  curso: CursoCreate = new CursoCreate();
  situacoes: Situacao[] = [
    {
      id: 0,
      descricao: "Em Andamento"
    },
    {
      id: 1,
      descricao: "Trancado"
    },
    {
      id: 2,
      descricao: "Concluído"
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private service: CursoService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.cursoForms = this.formBuilder.group({
      titulo: [null, Validators.required],
      instituicao: [null, Validators.required],
      cargaHoraria: [null, Validators.required],
      dtTermino: [null],
      descricao: [null, Validators.required],
      situacao: [null, Validators.required],
      tecnologias: [null]
    });
  }

  salvar() {
    this.curso = this.cursoForms.value;
    this.curso.situacao = this.cursoForms.value.situacao.id;

    this.service.criar(this.curso).subscribe(
      res => {
        this.cursoForms.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Curso adicionado com sucesso!',
        });
      }
    )

  }
}
