import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';

declare const OpenGeneralMessage: any

@Component({
  selector: 'app-remove-estado-solicitud',
  templateUrl: './remove-estado-solicitud.component.html',
  styleUrls: ['./remove-estado-solicitud.component.css']
})
export class RemoveEstadoSolicitudComponent implements OnInit {

  id: number = 0
  name: string = ""
  form: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private service: EstadosSolicitudService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord()
  }

  SearchRecord(){
    console.log("Buscando....")
    let id = parseInt(this.activeRoute.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: EstadoSolicitudModel) => {
        if(data.IdEstadoSolicitud && data.NombreEstadoSolicitud){
          this.id = data.IdEstadoSolicitud
          this.name = data.NombreEstadoSolicitud
        }
       
      }
    })
  }

  RemoveRecord(){
  
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: EstadoSolicitudModel) =>{
        OpenGeneralMessage(GeneralData.REMOVE_MESSAGE)
        this.router.navigate(['/business/list-estadosSolicitud'])
      },
      error: (err:any) => {
        OpenGeneralMessage(GeneralData.REMOVE_ERROR_MESSAGE)
      }
    })
  }

}
