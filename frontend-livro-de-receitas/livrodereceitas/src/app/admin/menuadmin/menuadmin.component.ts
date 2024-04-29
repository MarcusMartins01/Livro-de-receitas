import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent {
  isReceitasOpen: boolean = false;
  isPerfilUsuarioOpen: boolean = false;
  isLivroOpen: boolean = false;
  isFuncionariosOpen: boolean = false;
  isDegustacoesOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toast: ToastrService) {
    
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

  toggleFuncionarios() {
    this.isFuncionariosOpen = !this.isFuncionariosOpen;
  }

  toggleDegustacoes() {
    this.isDegustacoesOpen = !this.isDegustacoesOpen;
  }

  logout() {
    this.router.navigate(['/login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout')
  }
}







