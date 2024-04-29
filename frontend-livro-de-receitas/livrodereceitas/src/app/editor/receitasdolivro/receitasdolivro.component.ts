import { Component } from '@angular/core';

@Component({
  selector: 'app-receitasdolivro',
  templateUrl: './receitasdolivro.component.html',
  styleUrls: ['./receitasdolivro.component.css']
})
export class ReceitasdolivroComponent {
  gerarRelatorio(tipoRelatorio: string) {
    

    if (tipoRelatorio === 'ineditas') {
      // Lógica para gerar relatórios de receitas inéditas
    }
  }
}
