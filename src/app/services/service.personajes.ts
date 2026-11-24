import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ServicePersonajes {
  constructor(
    private _http: HttpClient
  ){}

  async deletePersonajeAsync(id: number): Promise<any> {
    let request = "api/pixar/" + id
    let url = environment.apipixar + request
    console.groupCollapsed(url)
    return firstValueFrom(
        this._http.delete(url)
    )

  }
  async insertPersonajeAsync(personaje: Personaje): Promise<any> {
    let request = "api/pixar"
    let url = environment.apipixar + request
    let header = new HttpHeaders().set("content-type", "application/json")
    return firstValueFrom(
        this._http.post(url, personaje, { headers: header})
    )
  }

  async getPersonajesAsync(): Promise<Personaje[]> {
    let request = "api/pixar"
    let url = environment.apipixar + request

    return firstValueFrom(
        this._http.get<Personaje[]>(url)
    )
  }
    
}