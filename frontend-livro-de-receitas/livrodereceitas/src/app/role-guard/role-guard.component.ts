import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-role-guard',
  templateUrl: './role-guard.component.html',
  styleUrls: ['./role-guard.component.css']
})
export class RoleGuardComponent {} //implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) { }

//   canActivate(): boolean {
//     const userRole = localStorage.getItem('userRole');

//     if (userRole === 'ADMIN') {
//         this.router.navigate(['/admin']);
//         return false;
//     } else if (userRole === 'EDITOR') {
//         this.router.navigate(['/editor']);
//         return false;
//     } else if (userRole === 'COZINHEIRO') {
//       this.router.navigate(['/component']);
//       return false;
//    }  else if (userRole === 'DEGUSTADOR') {
//       this.router.navigate(['/degustador']);
//       return false;
//   }
    

//     this.router.navigate(['/error']);
//     return false;
// }

