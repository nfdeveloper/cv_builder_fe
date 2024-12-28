import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { FormacaoCreate } from '../../../core/models/formacao/formacao-create.model';
import { MessageService } from 'primeng/api';
import { FormacaoService } from '../../../core/services/formacao.service';

interface Tipo {
  id: number;
  descricao: string;
}

@Component({
  selector: 'app-criar-formacao',
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
  templateUrl: './criar-formacao.component.html',
  styleUrl: './criar-formacao.component.scss'
})
export class CriarFormacaoComponent implements OnInit{
  
  formacaoForms: any = FormGroup;
  formacao: FormacaoCreate = new FormacaoCreate();
  statusFormacao: Tipo[] = [
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
  ];
  tipos: Tipo[] = [
    {
      id: 0,
      descricao: "Técnico"
    },
    {
      id: 1,
      descricao: "Tecnólogo"
    },
    {
      id: 2,
      descricao: "Graduação"
    },
    {
      id: 3,
      descricao: "Pós Graduação"
    },
    {
      id: 4,
      descricao: "Mestrado"
    },
    {
      id: 5,
      descricao: "Doutorado"
    },
  ];
  
  constructor(
      private formBuilder: FormBuilder,
      private service: FormacaoService,
      private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.formacaoForms = this.formBuilder.group({
      titulo: [null, [Validators.required]],
      tipo: [null, [Validators.required]],
      situacao: [null, [Validators.required]],
      previsaoTermino: [null,[Validators.required]],
      dataConclusao: [null,]
    })
  }

  salvar(){
    this.formacao = this.formacaoForms.value;
    this.formacao.tipo = this.formacaoForms.value.tipo.id;
    this.formacao.situacao = this.formacaoForms.value.situacao.id;

    console.log(this.formacao);
    this.service.criar(this.formacao).subscribe(
      res => {
        this.formacaoForms.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Formação adicionada com sucesso!',
        });
      }
    )
  }
}
