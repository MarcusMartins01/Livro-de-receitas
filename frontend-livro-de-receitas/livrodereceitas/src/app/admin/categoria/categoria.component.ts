import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InserirCategoriaComponent } from 'src/app/insercoes/categoria/inserir-categoria/inserir-categoria.component';
import { Categoria } from 'src/app/models/categoria/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { UpdateCategoriaComponent } from 'src/app/updates/categoria/update-categoria/update-categoria.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: any;
  displayedColumns = ['idCategoria', 'descricao', 'acao'];
  dataSource: MatTableDataSource<Categoria>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: CategoriaService,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.service.getCategorias().subscribe(
      (dados) => {
        this.dataSource = new MatTableDataSource<Categoria>(dados);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    );
  }

  openPopup(title: any) {
    var _popup = this.dialog.open(InserirCategoriaComponent, {
      width: '40%',
      enterAnimationDuration: '250ms',
      data: {
        title: title
      }
    });
    _popup.afterClosed().subscribe(() => {
      this.carregarDados();
    });
  }

  openPopupUpdate(id: any, title: any) {
    var _popup = this.dialog.open(UpdateCategoriaComponent, {
      width: '40%',
      enterAnimationDuration: '250ms',
      data: {
        title: title,
        id: id
      }
    });
    _popup.afterClosed().subscribe(() => {
      this.carregarDados();
    });
  }

  inserirCategoria() {
    this.openPopup('Inserir Categoria');
  }

  editRecipe(id: any) {
    if (window.confirm(`Você clicou em atualizar para o item: ${id}`)) {
      this.openPopupUpdate(id, 'Atualizar Categoria');
    }
  }

  deleteRecipe(id: number): void {
    if (window.confirm(`Você clicou em deletar para o item: ${id}`)) {
      this.service.deleteCategorias(id).subscribe(
        () => {
          this.toast.success('Excluído com sucesso');
          this.carregarDados();
        },
        (error) => {
          console.error('Erro ao excluir o item:', error);
        }
      );
    }
  }
}
