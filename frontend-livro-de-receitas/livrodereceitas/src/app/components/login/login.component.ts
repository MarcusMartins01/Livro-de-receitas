import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*
export class LoginComponent {
  creds: Usuario = {
    username: '',
    password: ''
  }
username = new FormControl(null, Validators.email); 
password = new FormControl (null, Validators.minLength(6));

constructor(
  private toast: ToastrService,
  private service: AuthService,
  private router: Router) { }

ngOnInit(): void { }

logar() {
  this.service.authenticate(this.creds).subscribe(
    (resposta) => {
      const authorizationHeader = resposta.headers.get('Authorization');

      if (authorizationHeader) {
        // Check if the Authorization header is present
        const token = authorizationHeader.substring(7);
        this.service.successfulLogin(token);

        this.router.navigate(['/fdddd']);
      } else {
        this.toast.error('Authorization header not found in the response');
      }
    },
    () => {
      this.toast.error('Usuário e/ou senha inválidos');
    }
  );
}//fim logar





validaCampos(): boolean {
  return this.username.valid && this.password.valid
}
}

*/
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private toast: ToastrService,) {}

  jwtService: JwtHelperService = new JwtHelperService();

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = this.jwtService.decodeToken(token);
      return decodedToken.role;
    }
    return null;
  }

  login(username: string, password: string): void {
      this.authService.login(username, password).subscribe(
          (response) => {
              const token = response.token; // Certifique-se de ajustar isso com a estrutura real da resposta.
              const role = this.getRole();
              console.log(role);
              // Armazene o token onde necessário (por exemplo, localStorage).
              localStorage.setItem('token', token);
              // Após a autenticação bem-sucedida, redirecione com base na role do usuário
              this.redirectBasedOnUserRole(role);
              
          },
          (error) => {
              console.error('Erro no login', error);
          }
      );
  }

  redirectBasedOnUserRole(token: string): void {
    // Use um switch ou if-else para decidir para qual rota redirecionar com base na role do usuário
    switch (token) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'EDITOR':
        this.router.navigate(['/editor']);
        break;
      case 'COZINHEIRO':
      this.router.navigate(['/cozinheiro']);
      break;
      case 'DEGUSTADOR':
      this.router.navigate(['/degustador']);
      break;
      default:
        // Role desconhecida ou lógica adicional, redirecione para uma rota padrão
        this.router.navigate(['/default']);
        break;
    }
  }
}

