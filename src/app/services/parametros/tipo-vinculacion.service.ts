import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { 
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<TipoVinculacionModel[]> {
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipo-vinculacions/`)
  }

  SaveRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {

    return this.http.post<TipoVinculacionModel>(`${this.url}/tipo-vinculacions`, {
      NombreTipoVinculacion: data.NombreTipoVinculacion,
      DescripcionTipoVinculacion: data.DescripcionTipoVinculacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    console.log("Editanto....");
    
    return this.http.put<TipoVinculacionModel>(`${this.url}/tipo-vinculacions/${data.IdTipoVinculacion}`, {
      NombreTipoVinculacion: data.NombreTipoVinculacion,
      DescripcionTipoVinculacion: data.DescripcionTipoVinculacion
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<TipoVinculacionModel>{
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipo-vinculacions/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/tipo-vinculacions/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

}
