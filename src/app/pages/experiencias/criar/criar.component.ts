import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ExperienciaCreate } from '../../../core/models/experiencia/experiencia-create.model';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ExperienciaService } from '../../../core/services/experiencia.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule
  ],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss'
})
export class CriarComponent implements OnInit{

  experienciaForms: any = FormGroup;
  experiencia: ExperienciaCreate = new ExperienciaCreate();

  constructor(
    private formBuilder: FormBuilder,
    private service: ExperienciaService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.experienciaForms = this.formBuilder.group({
      empresa: [null, [Validators.required]],
      funcao: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFim: [null],
      descricao: [null, [Validators.required]],
      tecnologias: [null],
      situacao: [null ]
    })
  }


  salvar() {
    this.experiencia = this.experienciaForms.value;

    this.service.criar(this.experiencia).subscribe(
      res => {
        this.experienciaForms.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Experiência criada com sucesso!',
        });
      }
    )
  }
}
