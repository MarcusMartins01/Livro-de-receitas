import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { CargoDto } from '../dtos/cargo-dto';

@Injectable({
  providedIn: 'root'
})
export class CargoService {


  private baseUrl="/api";

  constructor(private http: HttpClient) {}

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.baseUrl}/api/v1/cargos`);
  }

  deleteCargos(idCargo: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/cargos/${idCargo}`)
  }

  createCargo(cargo: Cargo): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/cargos`, cargo);
  }

  updateCargo(cargo: Cargo): Observable<any> {
    return this.http.put(`${this.baseUrl}/api/v1/cargos/${cargo.idCargo}`, cargo);
  }

  getCargoById(id: any): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.baseUrl}/api/v1/cargos/${id}`);
  }

}
