import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/rol.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  url: string = GeneralData.USER_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(`${this.url}/roles`)
  }

  SaveRecord(data: RolModel): Observable<RolModel> {

    return this.http.post<RolModel>(`${this.url}/roles`, {
      nombreRol: data.nombreRol,
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: RolModel): Observable<RolModel> {
    console.log("Editanto....");
    
    return this.http.put<RolModel>(`${this.url}/roles/${data._idRol}`, {
      _idRol: data._idRol,
      nombreRol: data.nombreRol
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: string): Observable<RolModel>{
    return this.http.get<RolModel>(`${this.url}/roles/${id}`)
  }

  RemoveRecord(id: string): Observable<any>{
    return this.http.delete(`${this.url}/roles/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
