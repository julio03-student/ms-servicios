import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/parametros/solicitud.model';
import { SolicitudService } from 'src/app/services/parametros/solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-solicitud',
  templateUrl: './remove-solicitud.component.html',
  styleUrls: ['./remove-solicitud.component.css']
})
export class RemoveSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  
  id: number = 0
  name: string = ""
  constructor(
    private router: Router,
    private service: SolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        if(data.IdSolicitud && data.NombreTrabajoSolicitud){
          this.id = data.IdSolicitud
          this.name = data.NombreTrabajoSolicitud
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: SolicitudModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/solicitud/list-solicitudes'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }
}
