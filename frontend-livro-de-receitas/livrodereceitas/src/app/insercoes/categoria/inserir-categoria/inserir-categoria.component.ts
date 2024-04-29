import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.css'],
})
export class InserirCategoriaComponent {
  categoria: Categoria = new Categoria();
  inputdata: any;
  closemessage = 'closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: CategoriaService,
    private router: Router,
    private toast: ToastrService,
    private ref: MatDialogRef<InserirCategoriaComponent>,
    private builder: FormBuilder
  ) {}

  closePopup() {
    this.ref.close('Closed using function');
  }

  ngOnInit(): void {
    this.inputdata = this.data;
  }

  myForm = this.builder.group({
    descricao: this.builder.control(''),
  });

  create(): void {
    this.categoria.descricao = this.myForm.value.descricao;
    this.service.createCategorias(this.categoria).subscribe(
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
