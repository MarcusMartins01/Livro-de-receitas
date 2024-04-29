import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-update-cargo',
  templateUrl: './update-cargo.component.html',
  styleUrls: ['./update-cargo.component.css']
})
export class UpdateCargoComponent {
  cargo: Cargo = new Cargo();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cargoService: CargoService, 
    private router: Router, 
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateCargoComponent>,
    private builder: FormBuilder
    ) {} 

  setPopupData(id: any) {
    this.cargoService.getCargoById(id).subscribe(item =>{
      this.editdata = item;
      this.myForm.setValue({idCargo:this.editdata.idCargo, descricao: this.editdata.descricao});
    })
  }

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata=this.data;
    this.setPopupData(this.inputdata.id);
  }

  myForm = this.builder.group({
    idCargo: this.builder.control(''),
    descricao: this.builder.control('')
  });

  atualizar() {
    const cargoAtualizado: Cargo = {
      idCargo: this.myForm.value.idCargo,
      descricao: this.myForm.value.descricao
    };
  
    this.cargoService.updateCargo(cargoAtualizado).subscribe(
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
  
}
