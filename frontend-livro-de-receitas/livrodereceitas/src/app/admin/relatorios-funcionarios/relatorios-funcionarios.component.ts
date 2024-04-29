import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorios-funcionarios',
  templateUrl: './relatorios-funcionarios.component.html',
  styleUrls: ['./relatorios-funcionarios.component.css']
})
export class RelatoriosFuncionariosComponent {
  gerarRelatorio(tipoRelatorio: string) {
    

    if (tipoRelatorio === 'tpagamentos') {
      // Lógica para gerar relatórios de receitas inéditas
    } else if (tipoRelatorio === 'tcargos') {
      // Lógica para gerar relatórios de receitas mais publicadas
    } 
  }
}
