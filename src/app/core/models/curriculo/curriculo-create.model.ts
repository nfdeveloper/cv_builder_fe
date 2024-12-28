export class CurriculoCreate {
    id?: number;
    nome?: string;
    titulo?: string;
    subtitulo?: string;
    resumo?: string;
    competenciasTecnicas?: string;
    experiencias: number[] = [];
    cursos: number[] = [];
}