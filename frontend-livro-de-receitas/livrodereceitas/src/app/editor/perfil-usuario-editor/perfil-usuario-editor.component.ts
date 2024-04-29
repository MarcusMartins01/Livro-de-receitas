import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario-editor',
  templateUrl: './perfil-usuario-editor.component.html',
  styleUrls: ['./perfil-usuario-editor.component.css']
})
export class PerfilUsuarioEditorComponent {
  form: FormGroup;  // Adicione esta linha

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}

