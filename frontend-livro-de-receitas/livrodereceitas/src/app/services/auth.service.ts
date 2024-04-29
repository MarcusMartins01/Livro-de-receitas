import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedd = false;
  private userRoles: string[] = [];
  private apiUrl = '/api';

  constructor(private http: HttpClient, private router: Router) {}



  login(username: string, password: string): Observable<any> {
      const credentials = { username: username, password: password };
      return this.http.post(`${this.apiUrl}/api/v1/auth`, credentials);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedd;
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  logout() {
    localStorage.clear();
  }

  // Adicione métodos para verificar se o usuário está autenticado, fazer logout, etc.
}
/*
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();
  baseUrl: string = "/api";

  constructor(private http: HttpClient) { }

  authenticate(creds: Usuario) {
    console.log(creds)
    return this.http.post(`${this.baseUrl}/api/v1/auth`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if(token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }

  logout() {
    localStorage.clear();
  }
}
*/