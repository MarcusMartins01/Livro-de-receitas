import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent {
  categoria: Categoria = new Categoria();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: CategoriaService,  
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateCategoriaComponent>,
    private builder: FormBuilder
    ) {} 

  ngOnInit(): void {
    this.inputdata=this.data;
    this.setPopupData(this.inputdata.id);
  }

  myForm = this.builder.group({
    idCategoria: this.builder.control(''),
    descricao: this.builder.control('')
  });

  setPopupData(id: any) {
    this.service.getCategoriaById(id).subscribe(item =>{
      this.editdata = item;
      this.myForm.setValue({idCategoria:this.editdata.idCategoria, descricao: this.editdata.descricao});
    })
  }

  closePopup() {
    this.ref.close('Closed using function');
  }

  atualizar() {
    const categoriaAtualizada: Categoria = {
      idCategoria: this.myForm.value.idCategoria,
      descricao: this.myForm.value.descricao
    };
  
    this.service.updateCategorias(categoriaAtualizada).subscribe(
      (response) => {
        this.toast.success('Categoria atualizado com sucesso', 'Atualizar');
        this.closePopup();
      },
      (error) => {
        this.toast.error('Erro ao atualizar a Categoria:', error);
        // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }

}
