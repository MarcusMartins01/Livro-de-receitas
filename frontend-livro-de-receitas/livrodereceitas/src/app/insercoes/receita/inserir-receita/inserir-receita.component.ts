import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria/categoria';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { ReceitaPk } from 'src/app/models/receita/receita-pk';
import { ReceitaService } from 'src/app/services/receita.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { debounceTime, switchMap } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-inserir-receita',
  templateUrl: './inserir-receita.component.html',
  styleUrls: ['./inserir-receita.component.css']
})
export class InserirReceitaComponent implements OnInit {

  novaReceita: Receita = new Receita();
  novaReceitaPk: ReceitaPk = new ReceitaPk();
  categorias: Categoria = new Categoria();
  categoriasCompleto: Categoria[] = [];
  categoriaResultado: Categoria[] = [];
  funcionarios: Funcionario = new Funcionario(); // Preencha com seus funcionários
  funcionario: Funcionario[] = [];
  formulario: FormGroup;
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ReceitaService, 
    private router: Router, 
    private toast: ToastrService, 
    private ref: MatDialogRef<InserirReceitaComponent>,
    private buildr: FormBuilder,
    private funcionarioService: FuncionariosService,
    private categoriaService: CategoriaService) { }

    ngOnInit(): void {
      this.inputdata = this.data;
      this.inicializarFormulario();
      this.carregarFuncionariosDoBancoDeDados();
      this.configurarAutocompletar();
      this.carregarCategoriasDoBancoDeDados();
      this.configurarAutocompletarCategoria();
    } 
  
    inicializarFormulario() {
      this.formulario = this.buildr.group({
        nome: [''],
        idFuncionario: [''],
        categoria: [''],
        modoPreparo: [''],
        qtdPorcao: [''],
        indInedita: ['']
      });
    }

  
    carregarFuncionariosDoBancoDeDados() {
      this.funcionarioService.getFuncionario().subscribe(
        (funcionariosDoBanco: Funcionario[]) => {
          // Filtra apenas os funcionários cujo cargo seja "Cozinheiro"
          this.funcionario = funcionariosDoBanco.filter(funcionario => funcionario.cargo.descricao === 'Cozinheiro');
        },
        (erro) => {
          console.error('Erro ao carregar funcionários do banco de dados', erro);
        }
      );
    }
    
  
    configurarAutocompletar() {
      this.formulario.get('idFuncionario').valueChanges.pipe(
        debounceTime(300),
        switchMap(id => this.funcionarioService.getFuncionarioById(id))
      ).subscribe(
        (funcionariosEncontrados: Funcionario | Funcionario[]) => {
          if (Array.isArray(funcionariosEncontrados)) {
            this.funcionario = funcionariosEncontrados;
          } else if (funcionariosEncontrados) {
            this.funcionario = [funcionariosEncontrados];
          } else {
            this.funcionario = [];
          }
        },
        (erro) => {
          console.error('Erro ao buscar funcionário por ID', erro);
        }
      );
    }

    carregarCategoriasDoBancoDeDados() {
      this.categoriaService.getCategorias().subscribe(
        (categorias: Categoria[]) => {
          this.categoriasCompleto = categorias;
          this.categoriaResultado = categorias; // Inicializa com todas as categorias ao carregar
        },
        (erro) => {
          console.error('Erro ao carregar categorias do banco de dados', erro);
        }
      );
    }
    
    
    configurarAutocompletarCategoria() {
      this.formulario.get('categoria').valueChanges.pipe(
        debounceTime(300),
        switchMap(id => {
          console.log('Buscando categoria por ID:', id);
          return this.categoriaService.getCategoriaById(id);
        })
      ).subscribe(
        (categoriaEncontrada: Categoria) => {
          console.log('Categoria encontrada:', categoriaEncontrada);
          this.categoriaResultado = [categoriaEncontrada];
        },
        (erro) => {
          console.error('Erro ao buscar categoria por ID', erro);
        }
      );
    }
    
    
    selecionarCategoria(event: MatAutocompleteSelectedEvent) {
      const categoriaSelecionada = this.categoriasCompleto.find(categoria => categoria.descricao === event.option.value);
      if (categoriaSelecionada) {
        this.formulario.get('categoria').setValue(categoriaSelecionada.idCategoria);
      }
    }
    
  
    selecionarFuncionario(event: MatAutocompleteSelectedEvent) {
      const funcionarioSelecionado = this.funcionario.find(funcionario => funcionario.nome === event.option.value);
      if (funcionarioSelecionado) {
        this.formulario.get('idFuncionario').setValue(funcionarioSelecionado.idFuncionario);
      }
    }

  closePopup() {
    this.ref.close('Closed using function');
  }
 
  criarReceita() {
    this.novaReceitaPk.nome = this.formulario.value.nome;
    this.funcionarios.idFuncionario = Number(this.formulario.value.idFuncionario);
    this.novaReceitaPk.funcionario = this.funcionarios;
    this.categorias.idCategoria = Number(this.formulario.value.categoria);
    this.novaReceita.categoria = this.categorias
    this.novaReceita.modoPreparo = this.formulario.value.modoPreparo;
    this.novaReceita.qtdPorcao = Number(this.formulario.value.qtdPorcao);
    this.novaReceita.indInedita = Number(this.formulario.value.indInedita);
    this.novaReceita.id = this.novaReceitaPk;
    
    this.service.cReceita(this.novaReceita).subscribe(
    (novaReceita) => {
      this.toast.success('Receita criada com sucesso:', 'Cadastro');
      this.closePopup();
    },
    (erro) => {
           this.toast.error('Erro ao criar receita:', erro);
           console.log(this.novaReceita)
         }
       );
    console.log(this.formulario.value)
  }

  atualizar(nome: string, funcionario: number) {
    this.service.getReceitaById(nome, funcionario).subscribe(item => {
      this.editdata = item;
      this.formulario.setValue({
        nome:this.editdata.nome, 
        idFuncionario: this.editdata.idFuncionario, 
        categoria: this.editdata.idCategoria, 
        modoPreparo: this.editdata.modoPreparo,
        qtdPorcao: this.editdata.qtdPorcao,
        indInedita: this.editdata.indInedita
       })
    })
  }

}
