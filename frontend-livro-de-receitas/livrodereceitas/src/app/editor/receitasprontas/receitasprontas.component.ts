import { Component } from '@angular/core';

@Component({
  selector: 'app-receitasprontas',
  templateUrl: './receitasprontas.component.html',
  styleUrls: ['./receitasprontas.component.css']
})
export class ReceitasprontasComponent {

  displayedColumns: string[] = ['name', 'categoria', 'degustar', 'inedita','cozinheiro', 'acao'];
  dataSource = ELEMENT_DATA;


  onImageSelected(event: any, element: PeriodicElement) {
    // Lógica para selecionar a imagem
    console.log('Imagem selecionada:', event.target.files[0]);
}
editRecipe(element: any) {
  alert(`Você clicou em editar para o item: ${element.name}`);
  // Aqui você pode implementar a lógica para editar o item
  // Por exemplo, você pode abrir um modal de edição
}

deleteRecipe(element: any) {
  const confirmDelete = confirm(`Você tem certeza que deseja excluir o item: ${element.name}?`);
  if (confirmDelete) {
    // Aqui você pode implementar a lógica para excluir o item
    // Por exemplo, remover o item do array de dados (dataSource)
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      // Atualize a fonte de dados para refletir a mudança na tabela
      this.dataSource = [...this.dataSource];
    }
  }

}

}



export interface PeriodicElement {
  name: string;
  categoria: number;
  cozinheiro: string;
  degustar: string;
  inedita: string; 

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Bolo de chocolate', categoria: 1, degustar: 'Degustada', inedita: 'inedita',
  cozinheiro: 'José Silva' },
  { name: 'Feijoada', categoria: 2, degustar: 'Degustada',inedita: 'inedita',
  cozinheiro: 'José Silva' },
  { name: 'Camarão alho e óleo', categoria: 2, degustar: 'Degustada',inedita: 'inedita',
  cozinheiro: 'José Silva' },
  { name: 'Cordeiro', categoria: 2,degustar: 'Degustada', inedita: 'inedita',
  cozinheiro: 'José Silva',  },
  { name: 'Ravioli', categoria: 3, degustar: 'Degustada',inedita: 'inedita',
  cozinheiro: 'José Silva', }

];



