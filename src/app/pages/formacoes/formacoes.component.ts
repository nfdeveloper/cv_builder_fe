import { Component, OnInit } from '@angular/core';
import { Formacao } from '../../core/models/formacao/formacao.model';
import { TableModule } from 'primeng/table';
import { FormacaoService } from '../../core/services/formacao.service';

@Component({
  selector: 'app-formacoes',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './formacoes.component.html',
  styleUrl: './formacoes.component.scss'
})
export class FormacoesComponent implements OnInit{
  
  formacoes: Formacao[] = [];

  constructor(
    private service: FormacaoService
  ) { }

  ngOnInit(): void {
    this.recuperaFormacoes();
  }

  recuperaFormacoes() {
    this.service.listar().subscribe(
      res => {
        this.formacoes = res;
      }
    )
  }
}
