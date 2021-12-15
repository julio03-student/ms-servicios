import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { InvitacionEvaluarModel } from 'src/app/models/parametros/invitacionEvaluar.model';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { InvitacionEvaluarService } from 'src/app/services/parametros/invitaciones-evaluar.service';
import { ProponenteService } from 'src/app/services/parametros/proponente.service.service';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';
import { LocalStorageService } from 'src/app/services/share/local-storage.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  
  id: number = 0
  hash:string = ""
  nombreProponente: string = ""
  nombreTrabajo: string = ""
  url: string = GeneralData.BUSINESS_ADMIN_URL
  token: string = ""

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private serviceInvitacion: InvitacionEvaluarService,
    private serviceSolicitud: SolicitudService,
    private serviceProponente: ProponenteService,
    private activeRoute: ActivatedRoute
  ) { 
    this.token = this.localStorageService.GetTokenFromLS()
  }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    let hash = this.activeRoute.snapshot.params["hash"];
    this.serviceSolicitud.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        if(data.IdSolicitud && data.Hash && data.NombreTrabajoSolicitud && data.IdProponente){
          this.id = data.IdSolicitud
          this.hash = data.Hash
          this.nombreTrabajo = data.NombreTrabajoSolicitud
          this.serviceProponente.SearchRecord(data.IdProponente).subscribe({
            next: (data: ProponenteModel) =>{
              if (data.PrimerNombreProponente && data.ApellidosProponente){
                this.nombreProponente = `${data.PrimerNombreProponente} ${data.ApellidosProponente}`
              }
            }
          })
        }
       
      }
    })
  }

  AceptRequest(){
    this.serviceSolicitud.UpdateStatusAcept(this.id).subscribe({
      next: (data: any) =>{
        OpenGeneralMessage("Solicitud aceptada")
        this.router.navigate(['/solicitud/list-solicitudes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

  RefuseRequest(){
    this.serviceSolicitud.UpdateStatusRefuse(this.id).subscribe({
      next: (data: any) =>{
        OpenGeneralMessage("Solicitud rechazada")
        this.router.navigate(['/solicitud/list-solicitudes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
