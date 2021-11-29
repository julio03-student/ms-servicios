import { Component, OnInit } from '@angular/core';
import { TipoSolicitud } from 'src/app/models/parametros/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

@Component({
  selector: 'app-list-tipo-solicitud',
  templateUrl: './list-tipo-solicitud.component.html',
  styleUrls: ['./list-tipo-solicitud.component.css']
})
export class ListTipoSolicitudComponent implements OnInit {

  tiposolicitudlist: TipoSolicitud[] = []

  constructor(
    private tiposolicitudservice: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.tiposolicitudservice.GetRecordList().subscribe({
      next: (data: TipoSolicitud[]) =>{
        console.log("Lista: "+data)
        this.tiposolicitudlist = data
      }
    })
  }
}
