import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria/categoria';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-update-restaurante',
  templateUrl: './update-restaurante.component.html',
  styleUrls: ['./update-restaurante.component.css']
})
export class UpdateRestauranteComponent {
  restaurante: Restaurante = new Restaurante();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RestauranteService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateRestauranteComponent>,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inputdata=this.data;
    this.setPopupData(this.inputdata.id);
  }

  myForm = this.builder.group({
    idRestaurante: this.builder.control(''),
    nome: this.builder.control(''),
    contato: this.builder.control('')
  });

  setPopupData(id: any) {
    this.service.getRestauranteById(id).subscribe(item =>{
      this.editdata = item;
      this.myForm.setValue({idRestaurante:this.editdata.idRestaurante, nome: this.editdata.nome, contato: this.editdata.contato});
    })
  }

  closePopup() {
    this.ref.close('Closed using function');
  }

  atualizar() {
    const restauranteAtualizado: Restaurante = {
      idRestaurante: Number(this.myForm.value.idRestaurante),
      nome: this.myForm.value.nome,
      contato: this.myForm.value.contato
    };
  
    this.service.updateRestaurante(restauranteAtualizado).subscribe(
      (response) => {
        this.toast.success('Restaurante atualizado com sucesso', 'Atualizar');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao atualizar o Restaurante:', error);
        // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }

  

}
