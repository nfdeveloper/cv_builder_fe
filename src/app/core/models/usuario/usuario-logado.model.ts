import { Contato } from "./contato.model";
import { Endereco } from "./endereco.model";

export class UsuarioLogado {
    nome?: string;
    cpf?: string;
    gitHub?: string;
    linkedin?: string;
    endereco?: Endereco;
    contato?: Contato;
}