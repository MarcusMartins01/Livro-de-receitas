import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private baseUrl="/api";

  constructor(private http: HttpClient) {}

  getFuncionario(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/api/v1/funcionarios`);
  }

  deleteFuncionario(idFuncionario: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/funcionarios/${idFuncionario}`)
  }

  createFuncionario(funcionario: Funcionario): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/funcionarios`, funcionario);
  }

  updateFuncionario(idFuncionario: any , funcionario: Funcionario): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/funcionarios/${idFuncionario}`, funcionario);
  }

  getFuncionarioById(id: Number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/api/v1/funcionarios/${id}`);
  }

}
