import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InserirCargoComponent } from 'src/app/insercoes/inserir-cargo/inserir-cargo.component';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { UpdateCargoComponent } from 'src/app/updates/update-cargo/update-cargo.component';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css'],
})
export class CargosComponent implements OnInit {
  cargos: Cargo[];
  displayedColumns = ['idCargo', 'descricao', 'acao'];
  dataSource: MatTableDataSource<Cargo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private toast: ToastrService,
    private dialog: MatDialog
  ) {}

  openPopup(title: any) {
    var _popup = this.dialog.open(InserirCargoComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title
      }
    })
    _popup.afterClosed().subscribe(item => {
      console.log(item);
      this.carregarDados();
    })
  }

  openPopupUpdate(id: any, title: any) {
    var _popup = this.dialog.open(UpdateCargoComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title,
        id: id
      }
    })
    _popup.afterClosed().subscribe(item => {
      console.log(item);
      this.carregarDados();
    })
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.cargoService.getCargos().subscribe(
      (dados) => {
        this.cargos = dados;
        this.dataSource = new MatTableDataSource(this.cargos);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    );
  }

  editRecipe(id: any) {
    if (window.confirm(`Você clicou em atualizar para o item: ${id}`)){
      this.openPopupUpdate(id, "Atualizar cargo")
    }
    
  }

  inserirCargo() {
    this.openPopup("Inserir cargo");
  }

  deleteRecipe(id: number): void {
    if (window.confirm(`Você clicou em deletar para o item: ${id}`)) {
      this.cargoService.deleteCargos(id).subscribe(
        () => {
          this.toast.success('Excluído com sucesso');
          // Remover o item da lista localmente
          this.cargos = this.cargos.filter(item => item.idCargo !== id);
        },
        (error) => {
          console.error('Erro ao excluir o item:', error);
        }
      );
    }
  }
}

