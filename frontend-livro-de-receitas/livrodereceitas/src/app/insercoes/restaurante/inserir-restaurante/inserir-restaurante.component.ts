import { Component, Inject} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-inserir-restaurante',
  templateUrl: './inserir-restaurante.component.html',
  styleUrls: ['./inserir-restaurante.component.css']
})
export class InserirRestauranteComponent {
  restaurante: Restaurante = new Restaurante();
  inputdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: RestauranteService, 
    private router: Router, 
    private toast: ToastrService,
    private ref: MatDialogRef<InserirRestauranteComponent>,
    private builder: FormBuilder) {}

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata=this.data;
  }
  
  myForm = this.builder.group({
    nome: this.builder.control(''),
    contato: this.builder.control('')
  });

  create(): void {
    this.restaurante.nome = this.myForm.value.nome;
    this.restaurante.contato = this.myForm.value.contato;
    this.service.createRestaurante(this.restaurante).subscribe(
      (response) => {
        this.toast.success('Restaurante cadastrado com sucesso', 'Cadastro');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao criar o restaurante:', error);
        // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }

}
