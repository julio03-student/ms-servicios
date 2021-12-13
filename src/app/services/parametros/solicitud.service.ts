import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicituds`)
  }

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel> {

    return this.http.post<SolicitudModel>(`${this.url}/solicituds`, {
      FechaSolicitud: `${data.FechaSolicitud}T01:33:27.000Z`,
      NombreTrabajoSolicitud: data.NombreTrabajoSolicitud,
      ArchivoSolicitud: data.ArchivoSolicitud,
      DescripcionGeneralSolicitud: data.DescripcionGeneralSolicitud,
      IdModalidad: data.IdModalidad,
      IdEstado: data.IdEstado,
      IdTipoSolicitud: data.IdTipoSolicitud,
      IdLineaInvestigacion: data.IdLineaInvestigacion,
      IdInvitacionEvaluar: data.IdInvitacionEvaluar,
      IdProponente: data.IdProponente
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }

  EditRecord(data: SolicitudModel): Observable<SolicitudModel> {
    console.log("Editanto....");

    return this.http.put<SolicitudModel>(`${this.url}/solicituds/${data.IdSolicitud}`, {
      IdSolicitud: data.IdSolicitud,
      FechaSolicitud: `${data.FechaSolicitud}T01:33:27.000Z`,
      NombreTrabajoSolicitud: data.NombreTrabajoSolicitud,
      ArchivoSolicitud: data.ArchivoSolicitud,
      DescripcionGeneralSolicitud: data.DescripcionGeneralSolicitud,
      IdModalidad: data.IdModalidad,
      IdEstado: data.IdEstado,
      IdTipoSolicitud: data.IdTipoSolicitud,
      IdLineaInvestigacion: data.IdLineaInvestigacion,
      IdInvitacionEvaluar: data.IdInvitacionEvaluar,
      IdProponente: data.IdProponente
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })    
  }

  SearchRecord(id: number): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.url}/solicituds/${id}`)
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(`${this.url}/solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }
}
