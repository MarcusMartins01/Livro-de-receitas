import { Status } from "../enums/funcionario/status";
import { Cargo } from "./cargo";
import { Usuario } from "./usuario";

export class Funcionario {
    idFuncionario?: any;
    nome!: string;
    rg!: string;
    salario!: number;
    cargo!: Cargo;
    nomeFantasia!: string;
    usuario!: any;
    status!: string;
}
