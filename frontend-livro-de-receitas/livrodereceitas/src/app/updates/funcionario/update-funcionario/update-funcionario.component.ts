import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, switchMap } from 'rxjs';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-update-funcionario',
  templateUrl: './update-funcionario.component.html',
  styleUrls: ['./update-funcionario.component.css']
})
export class UpdateFuncionarioComponent {
  funcionario: Funcionario = new Funcionario();
  cargo: Cargo = new Cargo();
  cargos: Cargo[] = [];
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: FuncionariosService,
    private cargoService: CargoService,  
    private router: Router, 
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateFuncionarioComponent>,
    private builder: FormBuilder
    ) {}

  myForm = this.builder.group({
    idFuncionario: this.builder.control(''),
    nome: this.builder.control(''),
    rg: this.builder.control(''),
    salario: this.builder.control(''),
    cargo: this.builder.control(''),
    nomeFantasia: this.builder.control(''),
    usuario: this.builder.control(''),
    status: this.builder.control('')
  });

  setPopupData(id: any) {
    console.log(this.inputdata.idFuncionario);
    this.service.getFuncionarioById(id).subscribe(item =>{
      this.editdata = item;
      console.log(item);
      this.myForm.setValue({
        idFuncionario: this.editdata.idFuncionario,
        nome:this.editdata.nome, 
        rg: this.editdata.rg,
        salario: this.editdata.salario,
        cargo: this.editdata.cargo.idCargo,
        nomeFantasia: this.editdata.nomeFantasia,
        usuario: this.editdata.usuario,
        status: this.editdata.status
      });
    })
  }

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata=this.data;
    this.setPopupData(this.inputdata.idFuncionario);
    this.carregarCargosDoBancoDeDados();
    this.configurarAutocompletar();
  }

  atualizar() {
    const id = Number(this.myForm.value.idFuncionario);
    this.funcionario.nome = this.myForm.value.nome;
    this.funcionario.rg = this.myForm.value.rg;
    this.funcionario.salario = Number(this.myForm.value.salario);
    this.cargo.idCargo = Number(this.myForm.value.cargo);
    this.funcionario.cargo = this.cargo;
    this.funcionario.nomeFantasia = this.myForm.value.nomeFantasia;
    this.funcionario.usuario = Number(this.myForm.value.usuario);
    this.funcionario.status = this.myForm.value.status;
  
    this.service.updateFuncionario(id, this.funcionario).subscribe( 
      (response) => {
        this.toast.success('Cargo atualizado com sucesso', 'Atualizar');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao atualizar o cargo:', error);
        // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
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
