import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/models/parametros/linea-investigacion.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LineaInvestigacionService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { 
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<LineaInvestigacionModel[]> {
    return this.http.get<LineaInvestigacionModel[]>(`${this.url}/linea-investigacions/`)
  }

  SaveRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel> {

    return this.http.post<LineaInvestigacionModel>(`${this.url}/linea-investigacions`, {
      NombreLineaInvestigacion: data.NombreLineaInvestigacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: LineaInvestigacionModel): Observable<LineaInvestigacionModel> {
    console.log("Editanto....");
    
    return this.http.put<LineaInvestigacionModel>(`${this.url}/linea-investigacions/${data.IdLineaInvestigacion}`, {
      NombreLineaInvestigacion: data.NombreLineaInvestigacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<LineaInvestigacionModel>{
    return this.http.get<LineaInvestigacionModel>(`${this.url}/linea-investigacions/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/linea-investigacions/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

}
