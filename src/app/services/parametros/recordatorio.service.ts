import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/parametros/recordatorio.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<RecordatorioModel[]> {
    return this.http.get<RecordatorioModel[]>(`${this.url}/recordatorios`)
  }

  SaveRecord(data: RecordatorioModel): Observable<RecordatorioModel> {

    return this.http.post<RecordatorioModel>(`${this.url}/recordatorios`, {
      FechaRecordatorio: `${data.FechaRecordatorio}T01:33:27.000Z`,
      HoraRecordatorio: `${data.HoraRecordatorio}T01:33:27.000Z`,
      TipoRecordatorio: data.TipoRecordatorio,
      DescripcionRecordatorio: data.DescripcionRecordatorio
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    console.log("Editanto....");
    
    return this.http.put<RecordatorioModel>(`${this.url}/recordatorios/${data.IdRecordatorio}`, {
      IdProponente: data.IdRecordatorio,
      FechaRecordatorio: `${data.FechaRecordatorio}T01:33:27.000Z`,
      HorarioRecordatorio: `${data.HoraRecordatorio}T01:33:27.000Z`,
      TipoRecordatorio: data.TipoRecordatorio,
      DescripcionRecordatorio: data.DescripcionRecordatorio
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<RecordatorioModel>{
    return this.http.get<RecordatorioModel>(`${this.url}/recordatorios/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/recordatorios/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
