import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private baseUrl="/api";

  constructor(private http: HttpClient) {}

  getRestaurante(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${this.baseUrl}/api/v1/restaurantes`);
  }

  deleteRestaurante(idRestaurante: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/restaurantes/${idRestaurante}`)
  }

  createRestaurante(restaurante: Restaurante): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/restaurantes`, restaurante);
  }

  updateRestaurante(restaurante: Restaurante): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/restaurantes/${restaurante.idRestaurante}`, restaurante);
  }

  getRestauranteById(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.baseUrl}/api/v1/restaurantes/${id}`);
  }

}
