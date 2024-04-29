import { Component } from '@angular/core';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent {
  quantidade: number = 1;  // Inicializa a quantidade

  changeQuantity(amount: number) {
    this.quantidade += amount;  // Ajusta a quantidade baseado no botão clicado
    if (this.quantidade < 1) this.quantidade = 1;  // Garante que a quantidade não seja menor que 1
  }
}