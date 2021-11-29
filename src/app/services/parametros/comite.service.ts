import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ComiteModel } from 'src/app/models/parametros/comite.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<ComiteModel[]> {
    return this.http.get<ComiteModel[]>(`${this.url}/comites`)
  }

  SaveRecord(data: ComiteModel): Observable<ComiteModel> {

    return this.http.post<ComiteModel>(`${this.url}/comites`, {
      NombreComite: data.NombreComite
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: ComiteModel): Observable<ComiteModel> {
    console.log("Editanto....");
    
    return this.http.put<ComiteModel>(`${this.url}/comites/${data.IdComite}`, {
      NombreComite: data.NombreComite
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<ComiteModel>{
    return this.http.get<ComiteModel>(`${this.url}/comites/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/comites/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
