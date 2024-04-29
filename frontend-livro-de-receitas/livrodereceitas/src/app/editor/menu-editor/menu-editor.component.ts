import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.css']
})
export class MenuEditorComponent {
  isReceitasOpen: boolean = false;
  isPerfilUsuarioOpen: boolean = false;
  isLivroOpen: boolean = false;

  constructor(private router: Router, private authService: AuthService, private toast: ToastrService) {}

  logout() {
    this.router.navigate(['/login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout')
  } 

  toggleReceitas() {
    this.isReceitasOpen = !this.isReceitasOpen;
  }

  togglePerfilUsuario() {
    this.isPerfilUsuarioOpen = !this.isPerfilUsuarioOpen;
  }
  

  toggleLivro() {
    this.isLivroOpen = !this.isLivroOpen;
  }

}


