import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Degustacao } from 'src/app/models/degustacao/degustacao';
import { DegustacaoPk } from 'src/app/models/degustacao/degustacao-pk';
import { Funcionario } from 'src/app/models/funcionario';
import { Receita } from 'src/app/models/receita/receita';
import { ReceitaPk } from 'src/app/models/receita/receita-pk';
import { DegustacaoService } from 'src/app/services/degustacao/degustacao.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-update-degustacao',
  templateUrl: './update-degustacao.component.html',
  styleUrls: ['./update-degustacao.component.css']
})
export class UpdateDegustacaoComponent {
  degustacao: Degustacao = new Degustacao();
  degustacaoPk: DegustacaoPk = new DegustacaoPk();
  degustacoes: Degustacao[] = [];
  funcionario: Funcionario = new Funcionario();
  funcionarioReceita: Funcionario = new Funcionario();
  funcionarios: Funcionario[];
  receita: Receita = new Receita();
  receitaPk: ReceitaPk = new ReceitaPk();
  inputdata: any;
  editdata: any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: DegustacaoService,
    private funcService: FuncionariosService, 
    private toast: ToastrService,
    private ref: MatDialogRef<UpdateDegustacaoComponent>,
    private builder: FormBuilder) {} 

    ngOnInit(): void {
      this.inputdata=this.data;
      console.log(this.inputdata.degustador)
      this.setPopupData(
        this.inputdata.degustador,
        this.inputdata.nome,
        this.inputdata.cozinheiro
        );

      //this.carregarFuncionariosDoBancoDeDados();
      //this.configurarAutocompletar();
    }

    myForm = this.builder.group({
      degustador: this.builder.control(''),
      nome: this.builder.control(''),
      cozinheiro: this.builder.control(''),
      notaDegustacao: this.builder.control(null, [Validators.min(0), Validators.max(10)])
    });

    setPopupData(degustador: any, nome: any, cozinheiro: any) {
      this.service.getDegustacaoById(degustador, nome, cozinheiro).subscribe(item =>{
        this.editdata = item;
        this.myForm.setValue({
          degustador: degustador,
          nome: nome,
          cozinheiro: cozinheiro,
          notaDegustacao: this.editdata.notaDegustacao
        });
      })
    }

    closePopup() {
      this.ref.close('Closed using function');
    }

    update() {
      this.receitaPk.nome = this.myForm.value.nome;
      const nome = this.receitaPk.nome;
      this.funcionarioReceita.idFuncionario = Number(this.myForm.value.cozinheiro);
      this.receitaPk.funcionario = this.funcionarioReceita;
      const cozinheiro = this.receitaPk.funcionario.idFuncionario
      this.receita.id = this.receitaPk
      this.funcionario.idFuncionario = Number(this.myForm.value.degustador);
      this.degustacaoPk.funcionario = this.funcionario;
      const degustador = this.degustacaoPk.funcionario.idFuncionario
      this.degustacaoPk.receita = this.receita;
      this.degustacao.id = this.degustacaoPk;
      this.degustacao.notaDegustacao = this.myForm.value.notaDegustacao;
      this.service.updateDegustacao(degustador, nome, cozinheiro, this.degustacao).subscribe( 
        (response) => {
          this.toast.success('Degustação atualizada com sucesso', 'Atualizar');
          this.closePopup();
        },
        (error) => {
          this.toast.error('Erro ao atualizar a degustação:', error);
        }
      );
    }

}
