import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

interface Categoria {
  imagem: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categorias: Categoria[] = [
    {
      imagem: "programador.jpg",
      titulo: "Programadores",
      descricao: "Descreva suas soft skills e hard skills assim como cursos e certificações."
    },
    {
      imagem: "analista_sistemas.jpg",
      titulo: "Analistas de Sistema",
      descricao: "Cite projetos, bancos de dados e sistemas nos quais já atuou."
    },
    {
      imagem: "analise_dados.jpg",
      titulo: "Analistas de Dados",
      descricao: "Descreva sua experiência e formação através de Portifólio e cursos."
    },
    {
      imagem: "analista_sec.jpg",
      titulo: "Analistas de Segurança",
      descricao: "Demonstre seus conhecimentos em uma das áreas que mais cresce na TI."
    },
  ]
}
