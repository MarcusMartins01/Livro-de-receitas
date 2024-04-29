import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent, _MatAutocompleteBase } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, switchMap } from 'rxjs';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent {

  funcionario: Funcionario = new Funcionario();
  cargo: Cargo = new Cargo();
  cargos: Cargo[] = [];
  inputdata: any;
  closemessage='closed using directive';
  //autoCargo: _MatAutocompleteBase; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: FuncionariosService,
    private cargoService: CargoService, 
    private router: Router, 
    private toast: ToastrService,
    private builder: FormBuilder,
    private ref: MatDialogRef<InserirFuncionarioComponent>) {}

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata=this.data;
    this.carregarCargosDoBancoDeDados();
    this.configurarAutocompletar();
  }

  myForm = this.builder.group({
    nome: this.builder.control(''),
    rg: this.builder.control(''),
    salario: this.builder.control(''),
    cargo: this.builder.control(''),
    nomeFantasia: this.builder.control(''),
    usuario: this.builder.control('')
  });

  inserirFuncionario(): void { 
    this.funcionario.nome = this.myForm.value.nome;
    this.funcionario.rg = this.myForm.value.rg;
    this.funcionario.salario = Number(this.myForm.value.salario);
    this.cargo.idCargo = Number(this.myForm.value.cargo);
    this.funcionario.cargo = this.cargo;
    this.funcionario.nomeFantasia = this.myForm.value.nomeFantasia;
    this.funcionario.usuario = Number(this.myForm.value.usuario);
    this.service.createFuncionario(this.funcionario).subscribe(
      (funcionarioInserido) => {
        this.toast.success('Funcionário inserido com sucesso:', 'Cadastro');
        // Adicione a lógica adicional conforme necessário, como redirecionar para uma página de sucesso
        this.closePopup();
      },
      (error) => {
        console.log(this.funcionario)
        this.toast.error('Erro ao inserir o funcionário:', error);
        // Adicione a lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }

  carregarCargosDoBancoDeDados() {
    this.cargoService.getCargos().subscribe(
      (cargosDoBanco: Cargo[]) => {
        // Atribui a lista completa de cargos
        this.cargos = cargosDoBanco;
      },
      (erro) => {
        console.error('Erro ao carregar funcionários do banco de dados', erro);
      }
    );
  }

  configurarAutocompletar() {
    this.myForm.get('cargo').valueChanges.pipe(
      debounceTime(300),
      switchMap(id => this.cargoService.getCargoById(id))
    ).subscribe(
      (cargosEncontrados: Cargo | Cargo[]) => {
        if (Array.isArray(cargosEncontrados)) {
          this.cargos = cargosEncontrados;
        } else if (cargosEncontrados) {
          this.cargos = [cargosEncontrados];
        } else {
          this.cargos = [];
        }
      },
      (erro) => {
        console.error('Erro ao buscar funcionário por ID', erro);
      }
    );
  }

  selecionarCargo(event: MatAutocompleteSelectedEvent) {
    const cargoSelecionado = this.cargos.find(cargo => cargo.descricao === event.option.value);
    if (cargoSelecionado) {
      this.myForm.get('cargo').setValue(cargoSelecionado.idCargo);
    }
  }

}
