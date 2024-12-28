import { Contato } from "./contato.model";
import { Endereco } from "./endereco.model";

export class Usuario {
    id?: number;
    nome?: string;
    sobrenome?: string;
    cpf?: string;
    username?: string;
    password?: string;
    permissao?: string;
    status?: string;
    endereco?: Endereco;
    contato?: Contato;
}