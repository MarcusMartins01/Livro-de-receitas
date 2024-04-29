import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InserirFuncionarioComponent } from 'src/app/insercoes/funcionario/inserir-funcionario/inserir-funcionario.component';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { UpdateFuncionarioComponent } from 'src/app/updates/funcionario/update-funcionario/update-funcionario.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'idFuncionario',
    'nome',
    'rg',
    'salario',
    'cargo',
    'nomeFantasia',
    'usuario',
    'status',
    'acao',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private funcionarioService: FuncionariosService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.funcionarioService.getFuncionario().subscribe(
      (dados) => {
        this.dataSource = new MatTableDataSource(dados);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editRecipe(id: any) {
    if (window.confirm(`Você clicou em atualizar para o item: ${id}`)) {
      this.openPopupAtualizar(id, 'Atualizar Funcionário');
    }
  }

  inserirFuncionario() {
    this.openPopup('Inserir Funcionário');
  }

  openPopup(title: any) {
    var _popup = this.dialog.open(InserirFuncionarioComponent, {
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

  openPopupAtualizar(id: any, title: any) {
    var _popup = this.dialog.open(UpdateFuncionarioComponent, {
      width: '40%',
      enterAnimationDuration: '250ms',
      data: {
        title: title,
        idFuncionario: id,
      },
    });
    _popup.afterClosed().subscribe((item) => {
      console.log(item);
      this.carregarDados();
    });
  }
}
