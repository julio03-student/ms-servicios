import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<DepartamentoModel[]> {
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos`)
  }

  SaveRecord(data: DepartamentoModel): Observable<DepartamentoModel> {

    return this.http.post<DepartamentoModel>(`${this.url}/departamentos`, {
      NombreDepartamento: data.NombreDepartamento,
      IdFacultad: data.IdFacultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    console.log("Editanto....");
    
    return this.http.put<DepartamentoModel>(`${this.url}/departamentos/${data.IdDepartamento}`, {
      NombreDepartamento: data.NombreDepartamento,
      IdFacultad: data.IdFacultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<DepartamentoModel>{
    return this.http.get<DepartamentoModel>(`${this.url}/departamentos/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/departamentos/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
