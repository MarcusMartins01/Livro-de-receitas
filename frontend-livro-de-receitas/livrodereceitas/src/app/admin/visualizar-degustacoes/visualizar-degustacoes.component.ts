import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Degustacao } from 'src/app/models/degustacao/degustacao';
import { DegustacaoService } from 'src/app/services/degustacao/degustacao.service';
import { UpdateDegustacaoComponent } from 'src/app/updates/degustacao/update-degustacao/update-degustacao.component';


@Component({
  selector: 'app-visualizar-degustacoes',
  templateUrl: './visualizar-degustacoes.component.html',
  styleUrls: ['./visualizar-degustacoes.component.css']
})
export class VisualizarDegustacoesComponent {
  degustacao: Degustacao[] = [];
  displayedColumns = [
    'nome',
    'cozinheiro',
    'degustador',
    'dataDegustacao',
    'notaDegustacao',
    'acao',
  ]

  constructor(
    private service: DegustacaoService,  
    private router: Router, 
    private toast: ToastrService,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.carregarDegustacoes();
  }

  carregarDegustacoes() {
    this.service.getDegustacoes().subscribe((degustacao) => {
      this.degustacao = degustacao;
    });
  }

  deleteRecipe(funcionarioDegustacao: number, nome: string, funcionarioReceita: number): void {
    if (window.confirm(`Você clicou em deletar para o item degustador: ${funcionarioDegustacao} nome: ${nome}, id: ${funcionarioReceita}`)) {
       this.service.deleteDegustacao(funcionarioDegustacao, nome, funcionarioReceita).subscribe(
         () => {
           this.toast.success('Excluído com sucesso');
           this.carregarDegustacoes();
         },
         (error) => {
           console.error('Erro ao excluir o item:', error);
         }
       );
    }
  }

  editRecipe(funcionarioDegustacao: number, nome: string, funcionarioReceita: number) {
    if (window.confirm(`Você clicou em deletar para o item degustador: ${funcionarioDegustacao} nome: ${nome}, id: ${funcionarioReceita}`)){
      this.openPopup(funcionarioDegustacao, nome, funcionarioReceita, 'Atualizar Degustação')
    }
  }

  openPopup(funcionarioDegustacao: any, nome: any, funcionarioReceita: any, title: any) {
    var _popup = this.dialog.open(UpdateDegustacaoComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title,
        degustador: funcionarioDegustacao,
        nome: nome,
        cozinheiro: funcionarioReceita
      }
    })
    _popup.afterClosed().subscribe(item => {
      this.carregarDegustacoes();
    })
  }

}
