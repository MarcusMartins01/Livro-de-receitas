import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isReceitasOpen: boolean = false;
  isPerfilUsuarioOpen: boolean = false;

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

}









