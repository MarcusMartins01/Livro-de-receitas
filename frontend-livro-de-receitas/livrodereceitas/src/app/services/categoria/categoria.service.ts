import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl="/api";

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/api/v1/categorias`);
  }

  deleteCategorias(idCategoria: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/categorias/${idCategoria}`)
  }

  createCategorias(categoria: Categoria): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/categorias`, categoria);
  }

  updateCategorias(categoria: Categoria): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/categorias/${categoria.idCategoria}`, categoria);
  }

  getCategoriaById(id: any): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/api/v1/categorias/${id}`);
  }
}
