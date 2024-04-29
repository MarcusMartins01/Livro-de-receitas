import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InserirRestauranteComponent } from 'src/app/insercoes/restaurante/inserir-restaurante/inserir-restaurante.component';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { UpdateRestauranteComponent } from 'src/app/updates/restaurante/update-restaurante/update-restaurante.component';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  restaurante: Restaurante[] = [];
  displayedColumns: string[] = ['idRestaurante', 'nome', 'contato', 'acao'];
  dataSource: MatTableDataSource<Restaurante>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private restauranteService: RestauranteService,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.restauranteService.getRestaurante().subscribe(
      (restaurante) => {
        this.restaurante = restaurante;
        this.dataSource = new MatTableDataSource<Restaurante>(this.restaurante);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    );
  }

  inserirRestaurante() {
    this.openPopup('Inserir Restaurante');
  }

  editRecipe(id: number) {
    if(window.confirm(`Você tem certeza que deseja atualizar o item: ${id}?`)) {
      this.openPopupUpdate(id, 'Atualizar Restaurante')
    }
  }

  deleteRecipe(id: number) {
    if (window.confirm(`Você tem certeza que deseja excluir o item: ${id}?`)) {
      this.restauranteService.deleteRestaurante(id).subscribe(
        () => {
          this.toast.success('Restaurante excluido com sucesso', 'Excluir');
          // Remover o item da lista localmente
          this.restaurante = this.restaurante.filter(
            (item) => item.idRestaurante !== id
          );
          this.dataSource = new MatTableDataSource<Restaurante>(this.restaurante);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          this.toast.error('Erro ao excluir restaurante:', error);
          // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
        }
      );
    }
  }

  openPopup(title: any) {
    var _popup = this.dialog.open(InserirRestauranteComponent, {
      width: '40%',
      enterAnimationDuration: '250ms',
      data: {
        title: title,
      },
    });
    _popup.afterClosed().subscribe((item) => {
      console.log(item);
      this.carregarDados();
    });
  }

  openPopupUpdate(id: any, title: any) {
    var _popup = this.dialog.open(UpdateRestauranteComponent, {
      width: '40%',
      enterAnimationDuration: '250ms',
      data: {
        title: title,
        id: id
      },
    });
    _popup.afterClosed().subscribe((item) => {
      console.log(item);
      this.carregarDados();
    });
  }
}
