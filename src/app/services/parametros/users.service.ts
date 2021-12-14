import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/models/user-data-model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = GeneralData.USER_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { 
    this.token = this.localStorageService.GetTokenFromLS()
  }

  GetRecordList(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.url}/usuarios`)
  }

  SaveRecord(data: UserModel): Observable<UserModel> {
    console.log(data);
    
    return this.http.post<UserModel>(`${this.url}/usuarios`, {
      nombresUsuario: data.nombresUsuario,
      apellidosUsuario: data.apellidosUsuario,
      documentoUsuario: data.documentoUsuario,
      fechaNacimientoUsuario: `${data.fechaNacimientoUsuario}T01:33:27.000Z`,
      emailUsuario: data.emailUsuario,
      direccionUsuario: data.direccionUsuario,
      celularUsuario: data.celularUsuario,
      estadoUsuario: data.estadoUsuario,
      idRol: data.idRol
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: UserModel): Observable<UserModel> {
    console.log("Editanto....");
    
    return this.http.put<UserModel>(`${this.url}/usuarios/${data._idUsuario}`, {
      _idUsuario: data._idUsuario,
      nombresUsuario: data.nombresUsuario,
      apellidosUsuario: data.apellidosUsuario,
      documentoUsuario: data.documentoUsuario,
      fechaNacimientoUsuario: `${data.fechaNacimientoUsuario}T01:33:27.000Z`,
      emailUsuario: data.emailUsuario,
      direccionUsuario: data.direccionUsuario,
      celularUsuario: data.celularUsuario,
      estadoUsuario: data.estadoUsuario,
      idRol: data.idRol
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: string): Observable<UserModel>{
    console.log(id);
    return this.http.get<UserModel>(`${this.url}/usuarios/${id}`)
  }

  RemoveRecord(id: string): Observable<any>{
    return this.http.delete(`${this.url}/usuarios/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

}