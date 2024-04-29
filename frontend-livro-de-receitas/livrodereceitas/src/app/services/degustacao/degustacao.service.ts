import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Degustacao } from 'src/app/models/degustacao/degustacao';

@Injectable({
  providedIn: 'root'
})
export class DegustacaoService {

  private baseUrl = '/api'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) {}

  getDegustacoes(): Observable<Degustacao[]> {
    return this.http.get<Degustacao[]>(`${this.baseUrl}/api/v1/degustacoes`)
  }

  deleteDegustacao(funcionarioDegustacao: number, nome: string, funcionarioReceita: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/degustacoes/${funcionarioDegustacao}_${nome}_${funcionarioReceita}`);
  }

  createDegustacao(degustacao: Degustacao): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/degustacoes`, degustacao);
  }

  updateDegustacao(funcionarioDegustacao: number, nome: string, funcionarioReceita: number, degustacao: Degustacao): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/degustacoes/${funcionarioDegustacao}_${nome}_${funcionarioReceita}`, degustacao);
  }

  getDegustacaoById(funcionarioDegustacao: number, nome: string, funcionarioReceita: number): Observable<Degustacao> {
    return this.http.get<Degustacao>(`${this.baseUrl}/api/v1/degustacoes/${funcionarioDegustacao}_${nome}_${funcionarioReceita}`);
  }
}
