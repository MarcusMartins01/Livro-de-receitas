import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, switchMap } from 'rxjs';
import { Categoria } from 'src/app/models/categoria/categoria';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { ReceitaPk } from 'src/app/models/receita/receita-pk';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { ReceitaService } from 'src/app/services/receita.service';

@Component({
  selector: 'app-update-receita',
  templateUrl: './update-receita.component.html',
  styleUrls: ['./update-receita.component.css']
})
export class UpdateReceitaComponent {
  novaReceita: Receita = new Receita();
  novaReceitaPk: ReceitaPk = new ReceitaPk();
  categorias: Categoria = new Categoria();
  categoriasCompleto: Categoria[] = [];
  categoriaResultado: Categoria[] = [];
  funcionarios: Funcionario = new Funcionario(); // Preencha com seus funcionários
  funcionario: Funcionario[] = [];
  //formulario: FormGroup;
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ReceitaService,
    private funcionarioService: FuncionariosService,
    private categoriaService: CategoriaService,
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateReceitaComponent>,
    private buildr: FormBuilder,) {}

    ngOnInit(): void {
      this.inputdata = this.data;
      this.setPopupData(this.inputdata.nome, this.inputdata.funcionario);
      //this.inicializarFormulario();
      this.carregarFuncionariosDoBancoDeDados();
      this.configurarAutocompletar();
      this.carregarCategoriasDoBancoDeDados();
      this.configurarAutocompletarCategoria();
    }

    setPopupData(nome: any, funcionario: any) {
      console.log('Nome: ' + this.inputdata.nome)
      console.log('Funcionario: ' + this.inputdata.funcionario)
      this.service.getReceitaById(nome, funcionario).subscribe(item =>{
        console.log(item);
        this.editdata = item;
        this.formulario.setValue({
          nome:this.editdata.id.nome, 
          idFuncionario: this.editdata.id.funcionario.idFuncionario,
          categoria: this.editdata.categoria.idCategoria,
          modoPreparo: this.editdata.modoPreparo,
          qtdPorcao: this.editdata.qtdPorcao,
          indInedita: this.editdata.indInedita
        });
      })
    }
    

    formulario = this.buildr.group({
      nome: this.buildr.control(''),
      idFuncionario: this.buildr.control(''),
      categoria: this.buildr.control(''),
      modoPreparo: this.buildr.control(''),
      qtdPorcao: this.buildr.control(''),
      indInedita: this.buildr.control('')
    });

    closePopup() {
      this.ref.close('Closed using function');
    }

    atualizar() {
      const nome = this.formulario.value.nome;
      const funcionario = Number(this.formulario.value.idFuncionario);
      this.novaReceitaPk.nome = this.formulario.value.nome;
      this.funcionarios.idFuncionario = Number(this.formulario.value.idFuncionario);
      this.novaReceitaPk.funcionario = this.funcionarios;
      this.categorias.idCategoria = Number(this.formulario.value.categoria);
      this.novaReceita.categoria = this.categorias
      this.novaReceita.modoPreparo = this.formulario.value.modoPreparo;
      this.novaReceita.qtdPorcao = Number(this.formulario.value.qtdPorcao);
      this.novaReceita.indInedita = Number(this.formulario.value.indInedita);
      this.novaReceita.id = this.novaReceitaPk;
    
      this.service.updateReceita(nome, funcionario, this.novaReceita).subscribe(
        (response) => {
          this.toast.success('Receita atualizada com sucesso', 'Atualizar');
          this.closePopup();
        },
        (error) => {
          this.toast.error('Erro ao atualizar a receita:', error);
          // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
        }
      );
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
        switchMap(id => this.funcionarioService.getFuncionarioById(Number(id)))
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
    
  
    // selecionarFuncionario(event: MatAutocompleteSelectedEvent) {
    //   const funcionarioSelecionado = this.funcionario.find(funcionario => funcionario.nome === event.option.value);
    //   if (funcionarioSelecionado) {
    //     this.formulario.get('idFuncionario').setValue(funcionarioSelecionado.idFuncionario);
    //   }
    // }

}
