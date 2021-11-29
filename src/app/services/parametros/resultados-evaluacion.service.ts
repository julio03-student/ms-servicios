import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ResultadosEvaluacionModel } from 'src/app/models/parametros/resultadosEvaluacion.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadosEvaluacionService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<ResultadosEvaluacionModel[]> {
    return this.http.get<ResultadosEvaluacionModel[]>(`${this.url}/resultado-evaluacions`)
  }

  SaveRecord(data: ResultadosEvaluacionModel): Observable<ResultadosEvaluacionModel> {

    return this.http.post<ResultadosEvaluacionModel>(`${this.url}/resultado-evaluacions`, {
      DescripcionResultadoEvaluacion: data.DescripcionResultadoEvaluacion,
      FechaResultadoEvaluacion : `${data.FechaResultadoEvaluacion}T01:33:27.000Z`,
      FormatoDiligenciado: data.FormatoDiligenciado,
      IdInvitacionEvaluar: data.IdInvitacionEvaluar
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: ResultadosEvaluacionModel): Observable<ResultadosEvaluacionModel> {
    console.log("Editanto....");
    
    return this.http.put<ResultadosEvaluacionModel>(`${this.url}/resultado-evaluacions/${data.IdResultadoEvaluacion}`, {
      DescripcionResultadoEvaluacion: data.DescripcionResultadoEvaluacion,
      FechaResultadoEvaluacion : data.FechaResultadoEvaluacion,
      FormatoDiligenciado: data.FormatoDiligenciado,
      IdInvitacionEvaluar: data.IdInvitacionEvaluar
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<ResultadosEvaluacionModel>{
    return this.http.get<ResultadosEvaluacionModel>(`${this.url}/resultado-evaluacions/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/resultado-evaluacions/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
