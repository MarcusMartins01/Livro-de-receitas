import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-inserir-cargo',
  templateUrl: './inserir-cargo.component.html',
  styleUrls: ['./inserir-cargo.component.css']
})
export class InserirCargoComponent {

  cargo: Cargo = new Cargo();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cargoService: CargoService, 
    private router: Router, 
    private toast: ToastrService,
    private ref: MatDialogRef<InserirCargoComponent>,
    private builder: FormBuilder
    ) {} 

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata=this.data;
    // if(this.inputdata.id>0){
    //   this.setPopupData(this.inputdata.id);
    // }
  }

  myForm = this.builder.group({
    descricao: this.builder.control('')
  });

  create(): void {
    this.cargo.descricao = this.myForm.value.descricao
    this.cargoService.createCargo(this.cargo).subscribe( 
      (response) => {
        this.toast.success('Cargo cadastrado com sucesso', 'Cadastro');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao criar o cargo:', error);
        // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }
  

}
