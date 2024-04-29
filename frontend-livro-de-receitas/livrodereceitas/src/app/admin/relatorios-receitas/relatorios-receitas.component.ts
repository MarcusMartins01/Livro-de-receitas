import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relatorios-receitas',
  templateUrl: './relatorios-receitas.component.html',
  styleUrls: ['./relatorios-receitas.component.css']
})
export class RelatoriosReceitasComponent {
  constructor(private router: Router, private location: Location) {}
  gerarRelatorio() {
    this.router.navigate(['/receitasIneditas'])
  }

}

