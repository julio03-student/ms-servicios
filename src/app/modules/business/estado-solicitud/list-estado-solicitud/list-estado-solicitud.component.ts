import { Component, OnInit } from '@angular/core';
import { EstadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadosSolicitudService } from 'src/app/services/parametros/estados-solicitud.service';

@Component({
  selector: 'app-list-estado-solicitud',
  templateUrl: './list-estado-solicitud.component.html',
  styleUrls: ['./list-estado-solicitud.component.css']
})
export class ListEstadosSolicitudComponent implements OnInit {

  estadosolicitudlist: EstadoSolicitudModel[] = []

  constructor(
    private estadosolicitudservice: EstadosSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordsList()
  }

  GetRecordsList(){
    this.estadosolicitudservice.GetRecordList().subscribe({
      next: (data: EstadoSolicitudModel[]) =>{
        console.log("Lista: "+data)
        this.estadosolicitudlist = data
      }
    })
  }
}
