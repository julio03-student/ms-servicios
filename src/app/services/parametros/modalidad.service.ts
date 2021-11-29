import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<ModalidadModel[]> {
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidads`)
  }

  SaveRecord(data: ModalidadModel): Observable<ModalidadModel> {

    return this.http.post<ModalidadModel>(`${this.url}/modalidads`, {
      NombreModalidad: data.NombreModalidad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: ModalidadModel): Observable<ModalidadModel> {
    console.log("Editanto....");
    
    return this.http.put<ModalidadModel>(`${this.url}/modalidads/${data.IdModalidad}`, {
      NombreModalidad: data.NombreModalidad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<ModalidadModel>{
    return this.http.get<ModalidadModel>(`${this.url}/modalidads/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/modalidads/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}