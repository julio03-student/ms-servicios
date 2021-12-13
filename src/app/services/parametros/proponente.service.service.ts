import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { UploadedFileModel } from 'src/app/models/upload.file.model';
import { LocalStorageService } from '../share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetTokenFromLS()
   }

  GetRecordList(): Observable<ProponenteModel[]> {
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`)
  }

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel> {
    console.log(typeof(data.IdTipoVinculacion));
    
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`, {
      PrimerNombreProponente: data.PrimerNombreProponente,
      OtrosNombresProponente: data.OtrosNombresProponente,
      ApellidosProponente: data.ApellidosProponente,
      CelularProponente: data.CelularProponente,
      DocumentoIdProponente: data.DocumentoIdProponente,
      CorreoProponente: data.CorreoProponente,
      Direccion: data.Direccion,
      fechaNacimiento: `${data.fechaNacimiento}T01:33:27.000Z`,
      IdTipoVinculacion: data.IdTipoVinculacion,
      /* image: data.image */
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  EditRecord(data: ProponenteModel): Observable<ProponenteModel> {
    console.log("Editanto....");
    
    return this.http.put<ProponenteModel>(`${this.url}/proponentes/${data.IdProponente}`, {
      IdProponente: data.IdProponente,
      PrimerNombreProponente: data.PrimerNombreProponente,
      OtrosNombresProponente: data.OtrosNombresProponente,
      ApellidosProponente: data.ApellidosProponente,
      CelularProponente: data.CelularProponente,
      DocumentoIdProponente: data.DocumentoIdProponente,
      CorreoProponente: data.CorreoProponente,
      Direccion: data.Direccion,
      fechaNacimiento: `${data.fechaNacimiento}T01:33:27.000Z`,
      IdTipoVinculacion: data.IdTipoVinculacion,
      /* image: data.image */
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<ProponenteModel>{
    return this.http.get<ProponenteModel>(`${this.url}/proponentes/${id}`)
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(`${this.url}/proponentes/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  UploadFile(formData: FormData): Observable<UploadedFileModel>{
     
    return this.http.post<UploadedFileModel>(
      `${this.url}/CargarImagen`, 
      formData,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }
}
