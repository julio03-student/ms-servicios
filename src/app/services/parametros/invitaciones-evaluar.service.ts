import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InvitacionEvaluarService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<InvitacionEvaluarModel[]> {
    return this.http.get<InvitacionEvaluarModel[]>(`${this.url}/invitacion-evaluars`)
  }

  SaveRecord(data: InvitacionEvaluarModel): Observable<InvitacionEvaluarModel> {

    let iv = {
      FechaInvitacion: `${data.FechaInvitacion}T01:33:27.000Z`,
      FechaRespuesta: `${data.FechaRespuesta}T01:33:27.000Z`,
      EstadoInvitacion: "Pendiente",
      ObservacionesInvitacionEvaluar: data.ObservacionesInvitacionEvaluar,
      IdJurado: data.IdJurado,
      IdRecordatorio: data.IdRecordatorio
    }

    console.log(iv);
    

    return this.http.post<InvitacionEvaluarModel>(`${this.url}/invitacion-evaluars`, iv,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: InvitacionEvaluarModel): Observable<InvitacionEvaluarModel> {
    console.log("Editanto....");
    
    return this.http.put<InvitacionEvaluarModel>(`${this.url}/invitacion-evaluars/${data.IdInvitacionEvaluar}`, {
      IdInvitacionEvaluar: data.IdInvitacionEvaluar,
      FechaInvitacion: `${data.FechaInvitacion}T01:33:27.000Z`,
      FechaRespuesta: `${data.FechaRespuesta}T01:33:27.000Z`,
      EstadoInvitacion: "Pendiente",
      ObservacionesInvitacionEvaluar: data.ObservacionesInvitacionEvaluar,
      IdJurado: data.IdJurado,
      IdRecordatorio: data.IdRecordatorio
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<InvitacionEvaluarModel>{
    return this.http.get<InvitacionEvaluarModel>(`${this.url}/invitacion-evaluars/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/invitacion-evaluars/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}