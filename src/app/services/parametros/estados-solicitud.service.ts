import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstadosSolicitudService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<EstadoSolicitudModel[]> {
    return this.http.get<EstadoSolicitudModel[]>(`${this.url}/estado-solicituds`)
  }

  SaveRecord(data: EstadoSolicitudModel): Observable<EstadoSolicitudModel> {

    return this.http.post<EstadoSolicitudModel>(`${this.url}/estado-solicituds`, {
      NombreEstadoSolicitud: data.NombreEstadoSolicitud
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: EstadoSolicitudModel): Observable<EstadoSolicitudModel> {
    console.log("Editanto....");
    
    return this.http.put<EstadoSolicitudModel>(`${this.url}/estado-solicituds/${data.IdEstadoSolicitud}`, {
      NombreEstadoSolicitud: data.NombreEstadoSolicitud
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<EstadoSolicitudModel>{
    return this.http.get<EstadoSolicitudModel>(`${this.url}/estado-solicituds/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/estado-solicituds/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
