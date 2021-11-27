import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionData } from 'src/app/models/session-data-model';
import { GeneralData } from '../../config/general-data';
import { UserCredencialsModel } from '../../models/credenciales-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData());
  url: string = GeneralData.USER_ADMIN_URL

  constructor(private http: HttpClient) { 
    this.SessionActive()
  }

  Login(modelo: UserCredencialsModel): Observable<SessionData> {
    /* console.log( modelo.username+":"+modelo.password) */
    return this.http.post<SessionData>(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
    
  }

  SessionActive(){
    let data = localStorage.getItem('session-data')
    console.log("Data login: "+data)
    if(data){
      let dataObject: SessionData = JSON.parse(data)
      dataObject.isLoggedIn = true
      this.RefreshSessionData(dataObject)
    }
  }

  RefreshSessionData(data: SessionData) {
    this.sessionDataSubject.next(data)
  }

  GetSessionStatus(){
    return this.sessionDataSubject.asObservable()
  }

}
