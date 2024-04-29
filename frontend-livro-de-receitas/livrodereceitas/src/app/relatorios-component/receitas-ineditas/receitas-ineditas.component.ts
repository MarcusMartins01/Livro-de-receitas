import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-receitas-ineditas',
  templateUrl: './receitas-ineditas.component.html',
  styleUrls: ['./receitas-ineditas.component.css']
})
export class ReceitasIneditasComponent {

  constructor(private location: Location) {}
  voltar(): void {
    this.location.back();
  }
}
