import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<JuradoModel[]> {
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`)
  }

  SaveRecord(data: JuradoModel): Observable<JuradoModel> {

    return this.http.post<JuradoModel>(`${this.url}/jurados`, {
      NombreJurado: data.NombreJurado,
      ApellidosJurado: data.ApellidosJurado,
      TelefonoJurado: data.TelefonoJurado,
      DocumentoJurado: data.DocumentoJurado,
      CorreoJurado: data.CorreoJurado,
      DireccionJurado: data.DireccionJurado,
      fechaNacimiento: `${data.fechaNacimiento}T01:33:27.000Z`,
      VinculacionJurado: data.VinculacionJurado
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: JuradoModel): Observable<JuradoModel> {
    console.log("Editanto....");
    
    return this.http.put<JuradoModel>(`${this.url}/jurados/${data.IdJurado}`, {
      IdJurado: data.IdJurado,
      NombreJurado: data.NombreJurado,
      ApellidosJurado: data.ApellidosJurado,
      TelefonoJurado: data.TelefonoJurado,
      DocumentoJurado: data.DocumentoJurado,
      CorreoJurado: data.CorreoJurado,
      DireccionJurado: data.DireccionJurado,
      fechaNacimiento: `${data.fechaNacimiento}T01:33:27.000Z`,
      VinculacionJurado: data.VinculacionJurado
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<JuradoModel>{
    return this.http.get<JuradoModel>(`${this.url}/jurados/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/jurados/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
