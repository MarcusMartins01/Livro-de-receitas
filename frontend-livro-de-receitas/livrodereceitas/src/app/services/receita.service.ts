import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita/receita';
import { ReceitaPk } from '../models/receita/receita-pk';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private baseUrl = '/api'; // Substitua pela URL do seu servidor Spring Boot

  constructor(private http: HttpClient) {}

  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${this.baseUrl}/api/v1/receitas`)
  }

  deleteReceita(nome: string, funcionario: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/receitas/${nome}_${funcionario}`);
  }

  createReceita(receita: Receita): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/receitas`, receita);
  }

  cReceita(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/receitas`, data);
  }

  updateReceita(nome: string, funcionario: number, receita: Receita): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/receitas/${nome}_${funcionario}`, receita);
  }

  getReceitaById(nome: string, funcionario: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/v1/receitas/${nome}_${funcionario}`);
  }

}
