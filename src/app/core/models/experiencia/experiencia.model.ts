import { Projeto } from "../projeto/projeto.model";

export class Experiencia {
    id?: number;
    empresa?: string;
    funcao?: string;
    dataInicio?: Date;
    dataFim?: Date;
    descricao?: string;
    tecnologias?: string;
    empregoAtual?: boolean;
    status?: string;
    projetos?: Projeto[];
}