import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<TipoSolicitud[]> {
    return this.http.get<TipoSolicitud[]>(`${this.url}/tipo-solicituds`)
  }

  SaveRecord(data: TipoSolicitud): Observable<TipoSolicitud> {

    return this.http.post<TipoSolicitud>(`${this.url}/tipo-solicituds`, {
      NombreTipoSolicitud: data.NombreTipoSolicitud,
      DescripcionTipoSolicitud: data.DescripcionTipoSolicitud,
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }

  EditRecord(data: TipoSolicitud): Observable<TipoSolicitud> {
    console.log("Editanto....");

    return this.http.put<TipoSolicitud>(`${this.url}/tipo-solicituds/${data.IdTipoSolicitud}`, {
      NombreTipoSolicitud: data.NombreTipoSolicitud,
      DescripcionTipoSolicitud: data.DescripcionTipoSolicitud,
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }

  SearchRecord(id: number): Observable<TipoSolicitud> {
    return this.http.get<TipoSolicitud>(`${this.url}/tipo-solicituds/${id}`)
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/tipo-solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }
}
