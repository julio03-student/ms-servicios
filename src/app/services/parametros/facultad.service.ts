import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { 
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<FacultadModel[]> {
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`)
  }

  SaveRecord(data: FacultadModel): Observable<FacultadModel> {

    return this.http.post<FacultadModel>(`${this.url}/facultads`, {
      NombreFacultad: data.NombreFacultad,
      CodigoFacultad: data.CodigoFacultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: FacultadModel): Observable<FacultadModel> {
    console.log("Editanto....");
    
    return this.http.put<FacultadModel>(`${this.url}/facultads/${data.IdFacultad}`, {
      NombreFacultad: data.NombreFacultad,
      CodigoFacultad: data.CodigoFacultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<FacultadModel>{
    return this.http.get<FacultadModel>(`${this.url}/facultads/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/facultads/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

}
