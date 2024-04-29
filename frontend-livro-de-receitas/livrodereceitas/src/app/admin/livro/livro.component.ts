import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantidade', 'acao'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  viewPdf(element: PeriodicElement) {
    console.log('Visualizando PDF para o elemento:', element);
    // Lógica para visualizar o PDF
  }

  onImageSelected(event: any, element: PeriodicElement) {
    // Lógica para selecionar a imagem
    console.log('Imagem selecionada:', event.target.files[0]);
  }

  editRecipe(element: PeriodicElement) {
    alert(`Você clicou em editar para o item: ${element.name}`);
    // Aqui você pode implementar a lógica para editar o item
    // Por exemplo, você pode abrir um modal de edição
  }

  deleteRecipe(element: PeriodicElement) {
    const confirmDelete = confirm(`Você tem certeza que deseja excluir o item: ${element.name}?`);
    if (confirmDelete) {
      // Aqui você pode implementar a lógica para excluir o item
      // Por exemplo, remover o item do array de dados (dataSource)
      const index = this.dataSource.data.indexOf(element);
      if (index >= 0) {
        this.dataSource.data.splice(index, 1);
        // Atualize a fonte de dados para refletir a mudança na tabela
        this.dataSource.data = [...this.dataSource.data];
      }
    }
  }
}



export interface PeriodicElement {
  name: string;
  quantidade: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: '', quantidade: 25, },
  { name: '', quantidade: 30, },
  { name: '', quantidade: 50, },
  { name: '', quantidade: 45, },
  { name: '', quantidade: 35, }

];





