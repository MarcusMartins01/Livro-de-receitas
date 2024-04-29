import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InserirReceitaComponent } from 'src/app/insercoes/receita/inserir-receita/inserir-receita.component';
import { Categoria } from 'src/app/models/categoria/categoria';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { ReceitaPk } from 'src/app/models/receita/receita-pk';
import { ReceitaService } from 'src/app/services/receita.service';
import { UpdateReceitaComponent } from 'src/app/updates/receita/update-receita/update-receita.component';
import { VisuReceitaComponent } from 'src/app/visualizar/receita/visu-receita/visu-receita.component';

@Component({
  selector: 'app-receitasadmin',
  templateUrl: './receitasadmin.component.html',
  styleUrls: ['./receitasadmin.component.css'],
})
export class ReceitasadminComponent implements OnInit, AfterViewInit {
  receitas: any;
  categoria: Categoria = new Categoria();
  receitaPk: ReceitaPk = new ReceitaPk();
  funcionario: Funcionario = new Funcionario();
  modoEdicao = false;
  displayedColumns: string[] = [
    'nome',
    'funcionario',
    'dataCriacao',
    'categoria',
    'acao',
  ];

  dataSource: MatTableDataSource<Receita>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ReceitaService, private router: Router, private toast: ToastrService, private dialog: MatDialog) {}

  ngOnInit() {
    this.carregarReceitas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  carregarReceitas() {
    this.service.getReceitas().subscribe((receitas) => {
      this.dataSource = new MatTableDataSource(receitas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editRecipe(nome: any, funcionario: any) {
    if (window.confirm(`Você clicou em atualizar para o item nome: ${nome}, id: ${funcionario}`)){
      this.openPopupAtualizar(nome, funcionario, 'Atualizar Receita');
    }
  }

  visRecipe(nome: any, funcionario: any) {
    if (window.confirm(`Você clicou em visualizar para o item nome: ${nome}, id: ${funcionario}`)){
      this.openPopupVisu(nome, funcionario, 'Atualizar Receita');
    }
  }

  deleteRecipe(nome: string, funcionario: number): void {
    if (window.confirm(`Você clicou em deletar para o item nome: ${nome}, id: ${funcionario}`)) {
      this.service.deleteReceita(nome, funcionario).subscribe(
        () => {
          this.toast.success('Excluído com sucesso');
          // Remover o item da lista localmente
          this.carregarReceitas();
        },
        (error) => {
          console.error('Erro ao excluir o item:', error);
          // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
        }
      );
    }
  }

  inserirReceita(){
    this.openPopup("Inserir Receita");
  }

  openPopup(title: any) {
    var _popup = this.dialog.open(InserirReceitaComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title
      }
    })
    _popup.afterClosed().subscribe(item => {
      this.carregarReceitas();
    })
  }
 
  openPopupAtualizar(nome: any, funcionario: any, title: any) {
    var _popup = this.dialog.open(UpdateReceitaComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title,
        nome: nome,
        funcionario: funcionario
      }
    })
    _popup.afterClosed().subscribe(item => {
      this.carregarReceitas();
    })
  }

  openPopupVisu(nome: any, funcionario: any, title: any) {
    var _popup = this.dialog.open(VisuReceitaComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title,
        nome: nome,
        funcionario: funcionario
      }
    })
    _popup.afterClosed().subscribe(item => {
      this.carregarReceitas();
    })
  }
}

