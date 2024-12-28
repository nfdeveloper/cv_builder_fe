import { Curso } from "../curso/curso.model";
import { Experiencia } from "../experiencia/experiencia.model";

export class Curriculo {
    id?: number;
    nome?: string;
    titulo?: string;
    subtitulo?: string;
    resumo?: string;
    competenciasTecnicas?: string;
    dataCurriculo?: Date;
    experiencias?: Experiencia[];
    cursos?: Curso[];
}