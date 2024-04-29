import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InserirDegustacaoComponent } from 'src/app/insercoes/degustacao/inserir-degustacao/inserir-degustacao.component';
import { Degustacao } from 'src/app/models/degustacao/degustacao';
import { DegustacaoPk } from 'src/app/models/degustacao/degustacao-pk';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { DegustacaoService } from 'src/app/services/degustacao/degustacao.service';
import { ReceitaService } from 'src/app/services/receita.service';
import { VisualizarDegustacaoComponent } from 'src/app/visualizar/degustacao/visualizar-degustacao/visualizar-degustacao.component';

@Component({
  selector: 'app-degustacao',
  templateUrl: './degustacao.component.html',
  styleUrls: ['./degustacao.component.css']
})
export class DegustacaoComponent {
  degustacao: Degustacao[] = [];
  receitas: Receita[] = [];
  urlDaImagem: string;
  dados: any;
  degustacaoPk: DegustacaoPk = new DegustacaoPk();
  funcionario: Funcionario = new Funcionario();

  constructor(
    private service: DegustacaoService, 
    private receitaService: ReceitaService, 
    private router: Router, 
    private toast: ToastrService,
    private dialog: MatDialog
    ) {}

  ngOnInit() {
    //this.carregarDegustacoes();
    this.carregarReceitas();
    console.log(this.receitas)
  }

  teste(img: any) {
    console.log(img)
  }

  carregarDegustacoes() {
     this.service.getDegustacoes().subscribe((degustacao) => {
       this.dados = degustacao;
     });
   }

  carregarReceitas() {
    this.receitaService.getReceitas().subscribe((dados) => {
      this.receitas = dados;
      // Modificar as URLs das imagens aqui, se necessário
    });
  }

  inserirDegustacao(receita: any): void {
    this.openPopup(receita, 'Inserir Degustação') 
    this.router.navigate(["./admin/visualizar-degustacoes"])
    this.carregarDegustacoes();
  }

  openPopup(receita: any, title: any) {
    var _popup = this.dialog.open(InserirDegustacaoComponent,{
      width: '40%',
      enterAnimationDuration:'250ms',
      data:{
        title:title,
        receita: receita
      }
    })
    _popup.afterClosed().subscribe(item => {
      this.carregarReceitas();
    })
  }

}


