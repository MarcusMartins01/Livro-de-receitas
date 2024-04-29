import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, switchMap } from 'rxjs';
import { Degustacao } from 'src/app/models/degustacao/degustacao';
import { DegustacaoPk } from 'src/app/models/degustacao/degustacao-pk';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { ReceitaPk } from 'src/app/models/receita/receita-pk';
import { DegustacaoService } from 'src/app/services/degustacao/degustacao.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-inserir-degustacao',
  templateUrl: './inserir-degustacao.component.html',
  styleUrls: ['./inserir-degustacao.component.css']
})
export class InserirDegustacaoComponent {
  degustacao: Degustacao = new Degustacao();
  degustacaoPk: DegustacaoPk = new DegustacaoPk();
  degustacoes: Degustacao[] = [];
  funcionario: Funcionario = new Funcionario();
  funcionarioReceita: Funcionario = new Funcionario();
  funcionarios: Funcionario[];
  receita: Receita = new Receita();
  receitaPk: ReceitaPk = new ReceitaPk();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive'; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: DegustacaoService,
    private funcService: FuncionariosService, 
    private toast: ToastrService,
    private ref: MatDialogRef<InserirDegustacaoComponent>,
    private builder: FormBuilder) {} 


  ngOnInit(): void {
    this.inputdata=this.data;
    console.log(this.inputdata);
    this.setPopupData(this.inputdata.receita.id.nome, this.inputdata.receita.id.funcionario.idFuncionario);
    this.carregarFuncionariosDoBancoDeDados();
    this.configurarAutocompletar();
  }

  myForm = this.builder.group({
    degustador: this.builder.control(''),
    nome: this.builder.control(''),
    cozinheiro: this.builder.control(''),
    notaDegustacao: this.builder.control(null, [Validators.min(0), Validators.max(10)])
  });

  setPopupData(nome: any, cozinheiro: any) {
      this.myForm.setValue({
        degustador: '',
        nome: nome,
        cozinheiro: cozinheiro,
        notaDegustacao: ''
      });
    }

  closePopup() {
    this.ref.close('Closed using function');
  }

  carregarFuncionariosDoBancoDeDados() {
    this.funcService.getFuncionario().subscribe(
      (funcionariosDoBanco: Funcionario[]) => {
        // Filtra apenas os funcionários cujo cargo seja "Cozinheiro"
        this.funcionarios = funcionariosDoBanco.filter(funcionario => funcionario.cargo.descricao === 'Degustador');
      },
      (erro) => {
        console.error('Erro ao carregar funcionários do banco de dados', erro);
      }
    );
  }
  

  configurarAutocompletar() {
    this.myForm.get('degustador').valueChanges.pipe(
      debounceTime(300),
      switchMap(id => this.funcService.getFuncionarioById(Number(id)))
    ).subscribe(
      (funcionariosEncontrados: Funcionario | Funcionario[]) => {
        if (Array.isArray(funcionariosEncontrados)) {
          this.funcionarios = funcionariosEncontrados;
        } else if (funcionariosEncontrados) {
          this.funcionarios = [funcionariosEncontrados];
        } else {
          this.funcionarios = [];
        }
      },
      (erro) => {
        console.error('Erro ao buscar funcionário por ID', erro);
      }
    );
  }

  selecionarFuncionario(event: MatAutocompleteSelectedEvent) {
    const funcionarioSelecionado = this.funcionarios.find(funcionario => funcionario.nome === event.option.value);
    if (funcionarioSelecionado) {
      // Certifique-se de que funcionarioSelecionado.idFuncionario é do tipo number
      this.myForm.get('degustador').setValue(funcionarioSelecionado.idFuncionario);
    }
  } 

  create() {
    this.receitaPk.nome = this.myForm.value.nome;
    this.funcionarioReceita.idFuncionario = Number(this.myForm.value.cozinheiro);
    this.receitaPk.funcionario = this.funcionarioReceita;
    this.receita.id = this.receitaPk
    this.funcionario.idFuncionario = Number(this.myForm.value.degustador);
    this.degustacaoPk.funcionario = this.funcionario;
    this.degustacaoPk.receita = this.receita;
    this.degustacao.id = this.degustacaoPk;
    this.degustacao.notaDegustacao = this.myForm.value.notaDegustacao;
    this.service.createDegustacao(this.degustacao).subscribe( 
      (response) => {
        this.toast.success('Degustação cadastrada com sucesso', 'Cadastro');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao criar a degustação:', error);
        console.log(this.degustacao)
      }
    );
  }
  
  
}
 