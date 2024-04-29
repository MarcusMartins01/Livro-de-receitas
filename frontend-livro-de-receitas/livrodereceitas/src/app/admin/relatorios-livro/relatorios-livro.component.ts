import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorios-livro',
  templateUrl: './relatorios-livro.component.html',
  styleUrls: ['./relatorios-livro.component.css']
})
export class RelatoriosLivroComponent {
  gerarRelatorio(tipoRelatorio: string) {
    

    if (tipoRelatorio === 'ineditas') {
      // Lógica para gerar relatórios de receitas inéditas
    } else if (tipoRelatorio === 'naoPublicadas') {
      // Lógica para gerar relatórios de receitas mais publicadas
    } 
  }
}

