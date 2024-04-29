import { Categoria } from "../categoria/categoria";
import { ReceitaPk } from "./receita-pk";

export class Receita {
    id!: ReceitaPk;
    dataCriacao!: Date;
    categoria!: Categoria;
    modoPreparo!: string;
    qtdPorcao!: number;
    indInedita!: number;
}


